<template>
  <MainLayout>
    <form @submit.prevent="onSubmit">
      <p class="type">
        <button type="button" :class="{ selected: type === 'players' }" @click="type = 'players'">
          {{ $t('players') }}
        </button>
        <button type="button" :class="{ selected: type === 'teams' }" @click="type = 'teams'">{{ $t('teams') }}</button>
      </p>

      <template v-if="type">
        <p class="number">
          <span>{{ numPlayers }}</span> {{ $t(type) }}
        </p>

        <p class="range">
          <button type="button" class="remove" @click="onRemovePlayer" :disabled="Number(numPlayers) === 1">-</button>
          <input
            type="range"
            min="1"
            :max="maxPlayers"
            name="num-players"
            step="1"
            v-model="numPlayers"
            orient="vertical"
          />
          <button type="button" class="add" @click="onAddPlayer" :disabled="Number(numPlayers) === maxPlayers">
            +
          </button>
        </p>
        <button type="submit" class="btn" disabled>{{ $t('startNewGame') }}</button>
      </template>
    </form>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MainLayout from '~/components/MainLayout/MainLayout.vue';

const type = ref<'players' | 'teams' | null>(null);

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

<style lang="scss" scoped>
form {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100dvh - 62px);
  width: 100%;
}

.type {
  display: flex;
  gap: 28px;
  margin: auto 12px 48px;
}

.number {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    display: block;
    font-size: 56px;
  }
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

button[type='submit'] {
  width: 100%;
}
</style>
