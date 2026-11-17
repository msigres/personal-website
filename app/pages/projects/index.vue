<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui';


const { data: projects } = await useAsyncData('projects-list',
  () => queryCollection('content')
    .where('category', '=', 'project')
    .all()
)

const items = ref<BreadcrumbItem[]>([
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Projects',
    to: `/projects`
  },
])

</script>

<template>
  <main class="py-12 space-y-10">
    <div class="flex justify-center">
      <UBreadcrumb :items="items" />
    </div>

    <h2 class="text-2xl md:text-3xl font-mono">
      My Project(s)
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 mt-8">
      <UCard variant="outline" :ui="{
        header: 'p-0 sm:px-0',
        body: 'space-y-4'
      }" v-for="project in projects">
        <template #header>
          <NuxtLink :to="project.path">
            <img class="w-full select-none aspect-video object-cover" style="-webkit-user-drag: none;"
              :src="project.image" :alt="project.title">
          </NuxtLink>
        </template>


        <h3 class="text-xl font-mono text-highlighted w-fit hover:underline">
          <NuxtLink :to="project.path">
            {{ project.title }}
          </NuxtLink>
        </h3>


        <p class="text-toned">{{ project.description }}</p>

        <div class="flex flex-wrap gap-2">
          <UBadge v-for="framework in project.tags" variant="outline">{{ framework }}</UBadge>
        </div>

        <div class="flex flex-wrap justify-between items-center" v-if="project.link">
          <p class="text-xs text-muted">{{ project.date }}</p>
          <UButton :to="project.link" target="_blank" color="primary" variant="link" class="px-0">
            View
            <UIcon name="i-lucide-arrow-up-right" />
          </UButton>
        </div>
      </UCard>
    </div>
  </main>
</template>