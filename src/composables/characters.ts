import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { ref, computed } from 'vue'
import type { CharactersResponse, CharacterVariables } from '@/@types'
import { useRouter, useRoute } from 'vue-router'


const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        image
        name
        gender
        species
        origin {
          name
        }
      }
      info {
        pages
        next
        prev
        count
      }
    }
  }
`

export function useCharacters() {
  const router = useRouter()
  const route = useRoute()


  const variables = ref<CharacterVariables>({
    page: Number(route.query.page) || 1,
    filter: {
      name: route.query.name?.toString() || ''
    }

  })

  const { result, loading, error, refetch } = useQuery<CharactersResponse>(
    GET_CHARACTERS,
    variables
  )

  const characters = computed(() => result.value?.characters.results ?? [])
  const pageInfo = computed(() => result.value?.characters.info)
  const itemsPerPage = computed(() => {
    if(pageInfo.value) return  Math.ceil(pageInfo.value.count / pageInfo.value.pages)

    return 0
  })

  async function changePage(newPage: number) {
   if(newPage === variables.value.page) return

    variables.value = {
      ...variables.value,
      page: newPage
    }


   await refetch(variables.value)
    await router.push({
      query: { ...route.query, page: newPage }
    })
  }

  async function filterByName(name: string) {
    if(name === variables.value.filter.name) return

    variables.value = {
      page: 1,
      filter: {
        name
      }
    }

    await refetch(variables.value)
    await router.push({
      query: { page: 1, name }
    })
  }


  return {
    characters,
    pageInfo,
    loading,
    error,
    changePage,
    filterByName,
    itemsPerPage,
    currentPage: computed(() => variables.value.page),
    currentFilter: computed(() => variables.value.filter.name)
  }
}
