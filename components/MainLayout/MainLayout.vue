<template>
  <main>
    <h1><NuxtLink to="/">Spielstand</NuxtLink></h1>
    <slot />
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Spielstand',
});
import '~/assets/css/main.css';
</script>
