<template>
  <MainLayout v-if="game" :title="game.name">
    <PlayersForm v-if="gameStore.players.length === 0" :playerType="game.players.type" :amount="game.players.num" />
    <Spielstand v-else />
  </MainLayout>
  <MainLayout v-else><p class="not-found">Game not found</p></MainLayout>
</template>

<script lang="ts" setup>
import { onServerPrefetch, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import MainLayout from '~/components/MainLayout/MainLayout.vue';
import PlayersForm from '~/components/PlayersForm/PlayersForm.vue';
import Spielstand from '~/components/Spielstand/Spielstand.vue';
import useGameStore from '~/store/game';
import type { Game } from '~/types/games';

const route = useRoute();
const gameStore = useGameStore();

const game: Game = await $fetch(`/api/game/${route.params.template}`);

onServerPrefetch(() => {});

onBeforeMount(() => {
  if (game) {
    gameStore.game = game;
  } else console.log('game not found:');
});
</script>

<style lang="scss" scoped>
.not-found {
  font-size: 1.6rem;
  margin-top: 10rem;
  text-align: center;
}
</style>
