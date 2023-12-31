<template>
  <MainLayout>
    <form @submit.prevent="onSubmit">
      <label for="num-players">Number of Players / Teams: {{ numPlayers }}</label>
      <p class="range">
        <button type="button" class="remove" @click="onRemovePlayer" :disabled="Number(numPlayers) === 1">-</button>
        <input type="range" min="1" :max="maxPlayers" name="num-players" step="1" v-model="numPlayers" />
        <button type="button" class="add" @click="onAddPlayer" :disabled="Number(numPlayers) === maxPlayers">+</button>
      </p>

      <button type="submit" class="btn">Start New Game</button>
    </form>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MainLayout from '~/components/MainLayout/MainLayout.vue';

const numPlayers = ref(1);
const maxPlayers = 20;

const onAddPlayer = () => {
  if (numPlayers.value < maxPlayers) {
    numPlayers.value = Number(numPlayers.value) + 1;
  }
};

const onRemovePlayer = () => {
  if (numPlayers.value > 1) {
    numPlayers.value = Number(numPlayers.value) - 1;
  }
};

const onSubmit = () => {
  console.log({ numPlayers: numPlayers.value });
};
</script>

<style scoped>
form {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 300px;
}

.range {
  display: flex;
  gap: 12px;
}

.add,
.remove {
  height: 40px;
  font-size: 22px;
  padding: 0;
  width: 40px;
}
</style>
