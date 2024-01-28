<template>
  <MainLayout :title="gameName">
    <div class="table-wrapper">
      <table>
        <caption class="sr">
          Current Score
        </caption>
        <thead>
          <tr>
            <th class="round"></th>
            <th v-for="name in names">{{ name }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(result, index) in results">
            <td>{{ index + 1 }}</td>
            <td v-for="(_score, scoreIndex) in result">
              <input
                type="number"
                value="score"
                @change="
                  event => {
                    results[index][scoreIndex] = Number(event.target.value);
                  }
                "
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr v-if="gameType === 'cumulated'" class="sum">
            <td>&nbsp;</td>
            <td v-for="(name, index) in names">{{ getSum(index) }}</td>
          </tr>
          <tr class="info">
            <td>Needed:</td>
            <td v-for="(name, index) in names">{{ getSum(index) < 1500 ? '60' : '90' }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <FloatingButton @onClick="results.push([null, null])" />
  </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import MainLayout from '~/components/MainLayout/MainLayout.vue';
import FloatingButton from '~/components/FloatingButton/FloatingButton.vue';

const router = useRouter();
const gameName = (router.currentRoute.value.query.gameName as string) ?? 'Custom Game';
const names = router.currentRoute.value.query.name as string[];
const gameType = router.currentRoute.value.query.game as string;

const results = ref<(number | null)[][]>([[null, null]]);

const getSum = (index: number) => results.value.reduce((sum, value) => sum + (value[index] || 0), 0);
</script>

<style lang="scss" scoped>
.table-wrapper {
  overflow: hidden;
  padding: 0.8rem;
  width: 100%;
}

table {
  border-radius: 0.2rem;
  border-spacing: 0;
  color: #2e2737;
  white-space: nowrap;
  width: 100%;

  th,
  td {
    background-color: #eee;
    height: 2.4rem;
    padding: 0 0.8rem;
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

  tfoot td {
    border-top: 1px solid #ccc;
  }

  .sum td {
    font-weight: bold;
  }

  .info td {
    background-color: transparent;
    color: #eee;

    &:first-child {
      font-size: 0.8rem;
    }
  }

  input {
    all: unset;
    height: 100%;
    width: 100%;
  }

  button {
    all: unset;
    /* display: block; */
    font-size: 1.4rem;
    /* height: 100%; */
    /* width: 100%; */
  }
}
</style>
