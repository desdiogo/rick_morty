<!-- pages/character/[id].vue ou similar -->
<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { useCharacter } from '@/composables/character.ts'
import Character from '@/components/Character.vue'
import Episode from '@/components/Episode.vue'
import Loading from '@/components/Loading.vue'
import { Button } from '@/components/ui/button'

const router = useRouter()
const { character, loading, onResult } = useCharacter()

onResult(async (result) => {
  const data = result.data
  if(data && data.character == null) {
    await router.push({ name: 'not-found' })
  }
})
</script>

<template>
  <Loading v-if="loading" />
  <div v-else-if="character" class="container mx-auto min-h-screen">
    <div class="max-w-7xl mx-auto w-full flex flex-col md:flex-row p-8 gap-8">
      <div class="md:w-1/3">
        <Button asChild class="w-fit mb-4">
          <RouterLink :to="{ name: 'home' }">Go Home</RouterLink>
        </Button>
        <div
          class="sticky top-0 flex"
          :class="{
            'items-center': character.episode.length >= 10,
            'md:h-[calc(100vh-4rem)]': character.episode.length >= 10,
          }"
        >
          <Character v-bind="character" />
        </div>
      </div>

      <div class="md:w-2/3">
        <h2 class="text-2xl font-bold mb-4">Episodes</h2>
        <div class="flex flex-wrap gap-8">
          <Episode v-for="episode in character.episode" :key="episode.id" v-bind="episode" />
        </div>
      </div>
    </div>
  </div>
</template>
