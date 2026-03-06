<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <UButton
    v-if="appConfig.socials?.github"
    :to="appConfig.socials.github"
    target="_blank"
    icon="i-simple-icons-github"
    aria-label="GitHub"
    color="neutral"
    variant="ghost"
  />
</template>
