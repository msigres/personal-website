<template>
  <header class="flex items-center justify-between py-6 border-b border-default">
    <div class="flex gap-2 items-center">
      <NuxtLink to="/">
        <span class="text-base md:text-lg font-mono font-semibold text-highlighted">
          ser.gi
        </span>
      </NuxtLink>

    </div>

    <div class="flex items-center gap-2 md:gap-3">
      <span class="font-mono text-xs text-muted mr-2">
        JAKARTA, ID
      </span>
      <UButton to="/blogs" variant="outline" size="sm" class="font-mono">blog</UButton>
      <UButton to="https://github.com/msigres" target="_blank" icon="i-lucide-github" size="md" color="neutral"
        variant="ghost" />
      <UColorModeButton />
    </div>
  </header>
</template>