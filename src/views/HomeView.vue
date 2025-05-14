<script setup lang="ts">
import Character from '@/components/Character.vue'
import { useCharacters } from '@/composables/characters.ts'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Loading from '@/components/Loading.vue'
import NoCharacter from '@/components/NoCharacter.vue'

const {
  characters,
  pageInfo,
  changePage,
  itemsPerPage,
  currentPage,
  filterByName,
  currentFilter,
  loading,
} = useCharacters()
const name = ref(currentFilter.value)
</script>

<template>
  <header class="w-full flex justify-center p-8 gap-4">
    <Input v-model="name" class="w-[215px] md:w-[320px]" />
    <Button class="cursor-pointer" @click="filterByName(name)">Search</Button>
  </header>
  <Loading v-if="loading" />
  <template v-else-if="characters.length > 0">
    <main class="w-full flex gap-4 flex-wrap justify-center p-8">
      <RouterLink
        v-for="character in characters"
        :key="character.id"
        :to="{ name: 'character', params: { id: character.id } }"
      >
        <Character v-bind="character" />
      </RouterLink>
    </main>
    <footer class="p-8">
      <Pagination
        v-slot="{ page }"
        :items-per-page="itemsPerPage"
        :total="pageInfo?.count"
        show-edges
        :sibling-count="1"
        :default-page="currentPage"
      >
        <PaginationContent v-slot="{ items }" class="flex items-center gap-1">
          <PaginationFirst @click="changePage(1)" class="cursor-pointer" />
          <PaginationPrevious @click="changePage(page - 1)" class="cursor-pointer" />

          <template v-for="(item, index) in items">
            <PaginationItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
              <Button
                @click="changePage(item.value)"
                class="w-10 h-10 p-0 cursor-pointer"
                :variant="item.value === page ? 'default' : 'outline'"
              >
                {{ item.value }}
              </Button>
            </PaginationItem>
            <PaginationEllipsis v-else :key="item.type" :index="index" />
          </template>

          <PaginationNext @click="changePage(page + 1)" class="cursor-pointer" />
          <PaginationLast @click="changePage(pageInfo?.pages as number)" class="cursor-pointer" />
        </PaginationContent>
      </Pagination>
    </footer>
  </template>
  <NoCharacter v-else />
</template>
