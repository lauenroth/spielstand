<template>
  <form @submit.prevent="gameStore.players = names">
    <h2>Please define the {{ playerType }}:</h2>
    <p v-for="number in amount" :key="`playerform.${number}`">
      <label :for="`name-${number}`">Name {{ number }}</label>
      <input type="text" :name="`name`" :id="`name-${number}`" v-model="names[number - 1]" required />
    </p>
    <button type="submit">Start Game</button>
  </form>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue';
import useGameStore from '~/store/game';
import type { PlayersType } from '~/types/games';

interface PlayersFormProps {
  amount: number;
  playerType: PlayersType;
}

const props = defineProps<PlayersFormProps>();

const gameStore = useGameStore();
const names = ref<string[]>([]);

onBeforeMount(() => {
  for (let index = 1; index <= props.amount; index += 1) {
    names.value.push(`Team ${index}`)
  }
});
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
