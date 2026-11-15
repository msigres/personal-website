<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'


const route = useRoute()

const { data: page } = await useAsyncData(() => queryCollection('content').path(`/projects/${route.params.slug}`).first())
if (!page.value) {
  throw createError({
    status: 404,
    statusText: 'Page Not Found',
  })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
})

const items = ref<BreadcrumbItem[]>([
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Projects',
    to: `/projects`
  },
  {
    label: page.value.title,
    to: `/projects/${route.params.slug}`
  },
])

</script>

<template>
  <div class="py-12 space-y-8">
    <UBreadcrumb :items="items" />

    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>