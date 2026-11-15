<script setup lang="ts">

const route = useRoute()

const { data: post } = await useAsyncData(() => queryCollection('content').path(`/post/${route.params.slug}`).first())
if (!post.value) {
  throw createError({
    status: 404,
    statusText: 'Page Not Found',
  })
}


useSeoMeta({
  title: post.value?.title,
  description: post.value?.description
})

</script>

<template>
  <div class="py-12 space-y-8">
    <ContentRenderer v-if="post" :value="post" />
  </div>
</template>