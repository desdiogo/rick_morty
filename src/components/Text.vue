<!-- components/LabelText.vue -->
<script setup lang="ts">
defineProps<{
  label: string
  text: string
}>()
</script>

<template>
  <div class="flex gap-2">
    <span class="font-bold capitalize">{{ label }}:</span>
    <span class="capitalize">{{ text }}</span>
  </div>
</template>
