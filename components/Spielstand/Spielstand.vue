<template>
  <p v-if="players.length"><NuxtLink to="/new-game">New Game</NuxtLink></p>
</template>

<script setup>
const players = [];
const rounds = [];
</script>
