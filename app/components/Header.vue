<template>
  <header class="flex items-center justify-between py-6 border-b border-default">
    <NuxtLink to="/">
      <span class="font-mono font-semibold text-highlighted">
        ser.gi
      </span>
    </NuxtLink>

    <div class="flex items-center gap-2">
      <span class="font-mono text-xs text-muted mr-2">
        JAKARTA, ID
      </span>
      <UButton to="https://github.com/msigres" target="_blank" icon="i-lucide-github" size="md" color="neutral"
        variant="ghost" />
      <UColorModeButton />
    </div>
  </header>
</template>