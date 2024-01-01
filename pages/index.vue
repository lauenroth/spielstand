<template>
  <MainLayout>
    <p class="new">
      <NuxtLink to="/new-game" class="btn">New Game</NuxtLink>
    </p>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '~/components/MainLayout/MainLayout.vue';
</script>

<style lang="scss">
.new {
  margin: auto 12px 48px;
}
</style>
