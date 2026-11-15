<script setup lang="ts">

useSeoMeta({
  titleTemplate: "Sergi's Website - %s",
})
</script>

<template>
  <UContainer>
    <Header />
    <slot />
    <Footer />
  </UContainer>
</template>