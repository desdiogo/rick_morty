<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import Text from '@/components/Text.vue'
import type { Episode } from '@/@types'

defineProps<Episode>()
</script>

<template>
  <Card class="w-[300px] cursor-pointer">
    <CardContent>
      <Text label="episode" :text="episode" />
      <Text label="air date" :text="air_date" />
    </CardContent>
  </Card>
</template>

<style scoped></style>
