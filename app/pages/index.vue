<script setup lang="ts">


const title = "Sergi's Personal Website"
const description = "Hi, i'm Sergi. I'm a Software Developer."
const skills = ["golang", "gdscript", "dart", "typescript", "javascript", "python", "rust", "c"]

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

</script>

<template>
  <main class="py-24 space-y-8">
    <div class="flex items-center gap-2">
      <span class="size-2 rounded-full bg-primary animate-pulse" />

      <span class="font-mono text-xs text-primary">
        AVAILABLE_FOR_OPPORTUNITIES
      </span>
    </div>

    <div class="space-y-4">
      <h1 class="font-mono text-4xl md:text-6xl font-bold tracking-tight text-highlighted">
        <span class="bg-green-300 dark:bg-green-700">
          Hello, World.
        </span>
      </h1>

      <h2 class="text-2xl text-toned">
        I'm a Software Developer.
      </h2>

      <p class="max-w-xl text-muted leading-relaxed">
        I build software, explore ideas, and turn
        problems into practical solutions.
      </p>

      <div class="flex flex-wrap gap-1">
        <UBadge v-for="skill in skills" class="rounded-full" variant="outline" :key="skill">{{ skill }}
        </UBadge>
      </div>
    </div>


    <div class="flex flex-wrap gap-3">
      <UButton color="primary">
        View Projects
        <UIcon name="i-lucide-arrow-up-right" />
      </UButton>

      <UButton color="neutral" variant="outline">
        Contact Me
      </UButton>
    </div>
  </main>
</template>