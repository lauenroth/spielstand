<template>
  <MainLayout>
    <form action="custom-game" method="get">
      <h2>Please choose:</h2>
      <p>
        <label>
          <input type="radio" name="type" value="players" @click="playerType = 'players'" />
          Players
        </label>
        <label>
          <input type="radio" name="type" value="teams" @click="playerType = 'teams'" />
          Teams
        </label>
      </p>

      <p v-if="playerType">
        <label for="num-players"> Number of players </label>
        <input type="number" name="num-players" min="1" v-model="numPlayers" id="num-players" />
      </p>

      <p v-for="number in numPlayers">
        <label :for="`name-${number}`">Name {{ number }}</label>
        <input type="text" :name="`name`" :id="`name-${number}`" :value="`Team ${number}`" />
      </p>

      <p v-if="numPlayers">
        <label>
          <input type="radio" name="game" value="points" @click="gameType = 'points'" />
          Points
        </label>
        <label>
          <input type="radio" name="game" value="cumulated" @click="gameType = 'cumulated'" />
          Cumulated Points
        </label>
        <label>
          <input type="radio" name="game" value="fields" @click="gameType = 'fields'" />
          Fields
        </label>
      </p>

      <p v-if="gameType">
        <Button>Create game</Button>
      </p>

      <aside v-if="playerType">
        <h2>Game Configuration</h2>
        <dl>
          <dt>Number of {{ playerType }}:</dt>
          <dd>{{ numPlayers }}</dd>
          <dt>Game Type:</dt>
          <dd>{{ gameType }}</dd>
        </dl>
      </aside>
    </form>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MainLayout from '~/components/MainLayout/MainLayout.vue';

const playerType = ref<'players' | 'teams' | null>(null);
const numPlayers = ref<number | null>(null);
const gameType = ref<'points' | 'cumulated' | 'fields' | null>(null);
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 0.8rem;
}

form {
  padding: 2.4rem;
  width: 100%;

  p {
    display: flex;
    gap: 1.8rem;
    margin: 2.4rem 0;
  }
}

aside {
  border-top: 1px solid #2e2737;
  margin-top: 2.4rem;
  padding-top: 2.4rem;
  width: 100%;

  dl {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
