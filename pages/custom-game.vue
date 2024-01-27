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
          <td v-for="(score, scoreIndex) in result">
            <input
              type="number"
              value="score"
              @change="
                event => {
                  results[index][scoreIndex] = Number(event.target.value);
                  console.log(results[index]);
                }
              "
            />
          </td>
        </tr>
        <!-- <tr v-if="results.length === 0 || results[results.length - 1].every(result => result !== null)">
          <td>{{ results.length + 1 }}</td>
          <td v-for="name in names">
            <button @click="showAddScore = !showAddScore">+</button>
            <input type="number" @change="event => console.log(event.target.value as number)" />
          </td>
        </tr> -->
      </tbody>
      <tfoot>
        <tr v-if="gameType === 'cumulated'" class="sum">
          <td>&nbsp;</td>
          <td v-for="(name, index) in names">{{ getSum(index) }}</td>
        </tr>
      </tfoot>
    </table>
    <button type="button" @click="results.push([null, null])">Add</button>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import MainLayout from '~/components/MainLayout/MainLayout.vue';

const router = useRouter();
const gameName = (router.currentRoute.value.query.gameName as string) ?? 'Custom Game';
const names = router.currentRoute.value.query.name as string[];
const gameType = router.currentRoute.value.query.game as string;

const results = ref<(number | null)[][]>([[null, null]]);

const getSum = (index: number) => results.value.reduce((sum, value) => sum + (value[index] || 0), 0);
</script>

<style lang="scss" scoped>
table {
  background-color: #eee;
  border-radius: 0.2rem;
  border-spacing: 0;
  color: #2e2737;
  margin: 0.8rem 0;
  max-width: 100%;

  th,
  td {
    height: 2.4rem;
    text-align: center;
  }

  .round {
    font-size: 0.8rem;
    font-weight: normal;
    width: 38px;
  }

  tbody tr:nth-child(odd) td {
    background-color: #ddd;
  }

  .sum td {
    border-top: 1px solid #ccc;
    font-weight: bold;
  }

  input {
    all: unset;
  }

  button {
    all: unset;
    display: block;
    font-size: 1.4rem;
    height: 100%;
    width: 100%;
  }
}
</style>
