<template>
  <form @submit.prevent="gameStore.players = names">
    <h2>Please define the {{ playerType }}:</h2>
    <p v-for="number in amount">
      <label :for="`name-${number}`">Name {{ number }}</label>
      <input type="text" :name="`name`" :id="`name-${number}`" v-model="names[number - 1]" required />
    </p>
    <button type="submit">Start Game</button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import useGameStore from '~/store/game';
import type { PlayersType } from '~/types/games';

interface PlayersFormProps {
  amount: number;
  playerType: PlayersType;
}

defineProps<PlayersFormProps>();

const gameStore = useGameStore();
const names = ref<string[]>([]);
</script>

<style lang="scss" scoped>
form {
  padding: 0.8rem;
  width: 100%;
}

h2 {
  font-weight: normal;
  margin: 1rem 0 2rem;
}

label {
  display: block;
  margin-bottom: 0.2rem;
}

input {
  font-size: 1rem;
  margin-bottom: 2rem;
  padding: 0.4rem;
  width: 100%;
}

button {
  margin-top: 1rem;
  width: 100%;
}
</style>
