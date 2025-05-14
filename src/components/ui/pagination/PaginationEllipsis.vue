<script setup lang="ts">
import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-vue-next'
import { PaginationEllipsis, type PaginationListProps } from 'reka-ui'
import { type HTMLAttributes } from 'vue'

const {class: className, ...delegated} = defineProps<PaginationListProps & { class?: HTMLAttributes['class'] }>()
</script>

<template>
  <PaginationEllipsis
    data-slot="pagination-ellipsis"
    v-bind="delegated"
    :class="cn('flex size-9 items-center justify-center', className)"
  >
    <slot>
      <MoreHorizontal class="size-4" />
      <span class="sr-only">More pages</span>
    </slot>
  </PaginationEllipsis>
</template>
