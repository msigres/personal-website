<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'


const route = useRoute()
const { origin } = useRequestURL()

const { data: page } = await useAsyncData(() => queryCollection('content').path(`/projects/${route.params.slug}`).first())
if (!page.value) {
  throw createError({
    status: 404,
    statusText: 'Page Not Found',
  })
}

const title = page.value.title
const description = page.value.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  author: page.value.author,
  ogImage: `${origin}${page.value.image}`,
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
    to: page.value.path
  },
])

</script>

<template>
  <div class="py-12 space-y-8" v-if="page">
    <div class="flex justify-center">
      <UBreadcrumb :items="items" />
    </div>

    <div class="space-y-4">
      <div class="flex flex-wrap gap-2 items-center">
        <UBadge v-for="framework in page.tags" variant="outline">{{ framework }}</UBadge>
        <p class="ml-auto text-xs text-muted">{{ page.date }}</p>
      </div>
    </div>

    <ContentRenderer :value="page" />
  </div>
</template>