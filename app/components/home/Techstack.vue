<script setup lang="ts">

const listTech = [
  {
    segment: [
      {
        text: "~/frontend $ ls",
        style: "title",
      },
      {
        text: "- Vue",
        style: "list",
      },
      {
        text: "- React",
        style: "list",
      },
      {
        text: "- Nuxt JS",
        style: "list",
      },
      {
        text: "- Next jS",
        style: "list",
      },
      {
        text: "- Tailwind",
        style: "list",
      },
    ]
  },
  {
    segment: [
      {
        text: "~/backend $ ls",
        style: "title",
      },
      {
        text: "- Node JS",
        style: "list",
      },
      {
        text: "- Express JS",
        style: "list",
      },
      {
        text: "- Prisma ORM",
        style: "list",
      },
      {
        text: "- Codeigniter",
        style: "list",
      },
      {
        text: "- Laravel",
        style: "list",
      },
      {
        text: "- Golang",
        style: "list",
      },
    ]
  },
]

const lineStyle: Record<string, string> = {
  'title': 'text-highlighted',
  'list': 'text-toned'
}
</script>

<template>
  <main class="py-24 space-y-8">
    <p class="text-muted text-xs font-mono text-right">03 / TECH_STACK.md</p>

    <h2 class="text-2xl md:text-3xl font-mono">
      Tools I work with.
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

      <div v-for="data in listTech"" class=" overflow-hidden rounded-xl border border-default bg-elevated/50
        backdrop-blur-sm ring-1 ring-white/2">
        <div class="flex items-center gap-2 border-b border-default p-4 sm:px-6">
          <span class="size-2.5 rounded-full bg-red-500" />
          <span class="size-2.5 rounded-full bg-yellow-500" />
          <span class="size-2.5 rounded-full bg-green-500" />
        </div>

        <div class="min-h-50 p-5 font-mono text-[13px] leading-[1.8] sm:p-6">
          <span v-for="s in data.segment" :class="`block ${lineStyle[s.style]}`">{{ s.text }}</span>
        </div>
      </div>

    </div>

    Backend

    Node.js · Express · PostgreSQL

    Tools

    Git · Docker · VS Code
  </main>
</template>