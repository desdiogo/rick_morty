<script setup lang="ts">
import { cn } from '@/lib/utils'
import { PaginationList, type PaginationListProps } from 'reka-ui'
import { type HTMLAttributes } from 'vue'

const {class: className, ...delegated} = defineProps<PaginationListProps & { class?: HTMLAttributes['class'] }>()
</script>

<template>
  <PaginationList
    v-slot="slotProps"
    data-slot="pagination-content"
    v-bind="delegated"
    :class="cn('flex flex-row items-center gap-1', className)"
  >
    <slot v-bind="slotProps" />
  </PaginationList>
</template>
