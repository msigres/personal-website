<script setup lang="ts">
import Techstack from '~/components/home/Techstack.vue'

const title = "Hello, World!"
const description = "Hi, i'm Sergi. I'm a Software Developer."
const langs = ["php", "javascript", "typescript", "golang", "gdscript", "dart", "python", "rust", "c"]

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

const { data: projects } = await useAsyncData('projects-list',
  () => queryCollection('content')
    .where('category', '=', 'project')
    .where('featured', '=', true)
    .limit(3)
    .all()
)

</script>

<template>

  <!-- Hero Start -->
  <main class="py-24 space-y-8">
    <p class="text-muted text-xs font-mono text-right">01 / INTRODUCTION.md</p>

    <div class="flex items-center gap-2">
      <span class="size-2 rounded-full bg-primary animate-pulse" />

      <span class="font-mono text-sm text-primary">
        AVAILABLE_FOR_OPPORTUNITIES
      </span>
    </div>

    <div class="space-y-4">
      <h1 class="font-mono text-4xl md:text-6xl font-bold tracking-tight text-highlighted mb-6">
        <span class="bg-green-300 dark:bg-green-700">
          Hello, World!
        </span>
      </h1>

      <h2 class="text-2xl text-toned">
        I'm a Software Developer.
      </h2>

      <p class="max-w-xl text-toned leading-relaxed">
        I build software, explore ideas, and turn
        problems into practical solutions.
      </p>

      <div class="flex flex-wrap gap-1">
        <UBadge v-for="lang in langs" class="rounded-full" variant="outline" :key="lang">{{ lang }}
        </UBadge>
      </div>
    </div>


    <div class="flex flex-wrap gap-3">
      <UButton color="primary" to="#projects">
        View Projects
        <UIcon name="i-lucide-arrow-up-right" />
      </UButton>

      <UButton color="neutral" variant="outline" to="#contact">
        Contact Me
      </UButton>
    </div>
  </main>
  <!-- Hero End -->


  <!-- About me Start -->
  <main class="py-24 space-y-8">
    <p class="text-muted text-xs font-mono text-right">02 / ABOUT.md</p>

    <h2 class="text-2xl md:text-3xl font-mono">
      A little about me.
    </h2>

    <p>
      I'm a developer interested in building useful, thoughtful, and reliable software. I enjoy solving problems,
      learning new technologies, and understanding how things work under the hood.
    </p>

    <p class="text-toned">Currently focused on building better things, one line at a time.</p>
  </main>
  <!-- About me End -->


  <!-- Tech Stack Start -->
  <Techstack />
  <!-- Tech Stack End -->


  <!-- Selected Project Start -->
  <main class="py-24 space-y-8" id="projects">
    <p class="text-muted text-xs font-mono text-right">04 / SELECTED_PROJECT.md</p>

    <h2 class="text-2xl md:text-3xl font-mono">
      Things I've built.
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

    <div class="flex justify-center mt-16">
      <UButton to="/projects">See other</UButton>
    </div>
  </main>
  <!-- Selected Project End -->


  <!-- Currently Start -->
  <main class="py-24 space-y-4">
    <p class="text-muted text-xs font-mono text-right">05 / CURRENTLY.md</p>

    <h2 class="text-2xl md:text-3xl font-mono">
      What I'm up to.
    </h2>

    <ul>
      <li>
        Building something new
      </li>
      <li>
        Learning and exploring new technologies
      </li>
      <li>
        Debugging things that worked yesterday
      </li>
    </ul>
  </main>
  <!-- Currently End -->


  <!-- Contact Start -->
  <main class="py-24 space-y-4" id="contact">
    <p class="text-muted text-xs font-mono text-right">06 / CONTACT.md</p>

    <h2 class="text-2xl md:text-3xl font-mono">
      Let's build something.
    </h2>

    Open to interesting projects, collaborations, and career opportunities.

    hello@example.com ↗
    GitHub ↗

    LinkedIn ↗

    Email ↗
  </main>
  <!-- Contact End -->

</template>