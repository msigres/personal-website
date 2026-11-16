<script setup lang="ts">

const { data: blogs } = await useAsyncData('blog-list',
  () => queryCollection('content')
    .where('category', '=', 'blog')
    .all()
)

</script>

<template>
  <main class="py-18 space-y-10">
    <h2 class="text-2xl md:text-3xl font-mono">
      Read something.
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 mt-8">
      <UCard variant="outline" :ui="{
        header: 'p-0 sm:px-0',
        body: 'space-y-4'
      }" v-for="blog in blogs">
        <template #header>
          <NuxtLink :to="blog.path">
            <img class="w-full select-none aspect-video object-cover" style="-webkit-user-drag: none;" :src="blog.image"
              :alt="blog.title">
          </NuxtLink>
        </template>


        <h3 class="text-xl font-mono text-highlighted w-fit hover:underline">
          <NuxtLink :to="blog.path">
            {{ blog.title }}
          </NuxtLink>
        </h3>


        <p class="text-toned">{{ blog.description }}</p>

        <div class="flex flex-wrap gap-2">
          <UBadge v-for="framework in blog.tags" variant="outline">{{ framework }}</UBadge>
        </div>

        <div class="flex flex-wrap justify-between items-center" v-if="blog.link">
          <p class="text-xs text-muted">{{ blog.date }}</p>
          <UButton :to="blog.link" target="_blank" color="primary" variant="link" class="px-0">
            View
            <UIcon name="i-lucide-arrow-up-right" />
          </UButton>
        </div>
      </UCard>
    </div>
  </main>
</template>