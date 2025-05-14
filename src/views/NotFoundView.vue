<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen w-full flex items-center justify-center">
    <Card class="w-[300px]">
      <CardHeader>
        <CardTitle class="text-2xl text-center">Page Not Found</CardTitle>
        <CardDescription class="text-center">
          Sorry, we couldn't find the page you're looking for.
        </CardDescription>
      </CardHeader>

      <CardContent class="flex justify-center">
        <Button asChild>
          <RouterLink :to="{ name: 'home' }"> Back to Home </RouterLink>
        </Button>
      </CardContent>
    </Card>
  </div>
</template>
