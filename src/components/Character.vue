<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Character } from '@/@types'
import Text from '@/components/Text.vue'

defineProps<Character>()
</script>

<template>
  <Card class="w-[300px]">
    <CardHeader>
      <CardTitle class="mb-4">{{ name }}</CardTitle>
      <CardDescription
        ><img :src="image" :alt="`Imagem ${name}`" class="rounded-2xl"
      /></CardDescription>
    </CardHeader>
    <CardContent>
      <Text label="gender" :text="gender" />
      <Text label="species" :text="species" />
      <Text label="origin" :text="origin.name" />
    </CardContent>
  </Card>
</template>
