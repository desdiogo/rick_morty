import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { computed } from 'vue'
import type { CharacterResponse } from '@/@types'
import { useRoute } from 'vue-router'

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      image
      name
      gender
      species
      origin {
        name
      }
      episode {
        id
        episode
        air_date
      }
    }
  }
`

export function useCharacter() {
  const route = useRoute()

  const id = String(route.params.id)

  const { result, loading, error, onResult } = useQuery<CharacterResponse>(GET_CHARACTER, {
    id: String(id),
  })

  const character = computed(() => result.value?.character)

  return {
    character,
    loading,
    error,
    onResult,
  }
}
