<template>
  <MainLayout :title="gameName">
    <table>
      <caption class="sr">
        Current Score
      </caption>
      <thead>
        <tr>
          <th class="round">#</th>
          <th v-for="name in names">{{ name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(result, index) in results">
          <td>{{ index + 1 }}</td>
          <td v-for="score in result">{{ score }}</td>
        </tr>
        <tr>
          <td>{{ results.length + 1 }}</td>
          <td v-for="name in names"><button @click="showAddScore = !showAddScore">+</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr v-if="gameType === 'cumulated'" class="sum">
          <td>Sum</td>
          <td v-for="(name, index) in names">{{ getSum(index) }}</td>
        </tr>
      </tfoot>
    </table>
    {{ gameType }}
  </MainLayout>

  <form id="add-score" :class="{ show: showAddScore }" @submit="addNewScore">
    <p>
      <label for="new-score">New Score</label>
      <input type="number" id="new-score" name="new-score" v-model="newScore" autofocus />
    </p>
    <Button fullWidth isSubmitButton>Save Score</Button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import MainLayout from '~/components/MainLayout/MainLayout.vue';
import Button from '~/components/shared/Button.vue';

const router = useRouter();
const gameName = (router.currentRoute.value.query.gameName as string) ?? 'Custom Game';
const names = router.currentRoute.value.query.name as string[];
const gameType = router.currentRoute.value.query.game as string;

const results = ref<number[][]>([
  [50, 20],
  [40, 120],
  [80, 35],
  [30, 25],
]);
const showAddScore = ref(false);
const newScore = ref<number | null>(null);

const getSum = (index: number) => results.value.reduce((sum, value) => sum + value[index], 0);

const addNewScore = (event: SubmitEvent) => {
  event.preventDefault();
  console.log('add score', newScore.value);
};
</script>

<style lang="scss" scoped>
table {
  background-color: #eee;
  border-radius: 0.2rem;
  border-spacing: 0;
  color: #2e2737;
  margin: 0.8rem 0;
  width: calc(100% - 1.6rem);

  th,
  td {
    height: 2.4rem;
    text-align: center;
  }

  .round {
    width: 4rem;
  }

  tbody tr:nth-child(odd) td {
    background-color: #ddd;
  }

  .sum td {
    border-top: 1px solid #ccc;
    font-weight: bold;
  }

  button {
    all: unset;
    display: block;
    font-size: 1.4rem;
    height: 100%;
    width: 100%;
  }
}

#add-score {
  background-color: #eee;
  bottom: -20rem;
  left: 0;
  padding: 0.8rem;
  position: fixed;
  right: 0;
  transition: bottom 0.25s;

  &.show {
    bottom: 0;
  }

  label {
    display: block;
    color: #2e2737;
  }

  input {
    padding: 0.2rem 0.4rem;
    width: 100%;
  }
}
</style>
