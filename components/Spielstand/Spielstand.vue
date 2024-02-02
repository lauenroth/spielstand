<template>
  <div class="table-wrapper">
    <table>
      <caption class="sr">
        Current Score
      </caption>
      <thead>
        <tr>
          <th class="round"></th>
          <th v-for="name in gameStore.players">{{ name }}</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="gameStore.game.isRoundBased">
          <tr v-for="(result, index) in gameStore.results">
            <td>{{ index + 1 }}</td>
            <td v-for="(_score, scoreIndex) in result">
              <input
                type="number"
                value="score"
                @change="
                  event => {
                    gameStore.results[index][scoreIndex] = Number(event.target.value);
                  }
                "
              />
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <template v-for="field in gameStore.game.footer">
          <InfoField v-if="field.type === 'infoField'" :field="field" isFooter />
          <tr v-else>
            <td>unknown</td>
          </tr>
        </template>
      </tfoot>
    </table>
  </div>
  <FloatingButton @onClick="gameStore.results.push([null, null])" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import FloatingButton from '~/components/FloatingButton/FloatingButton.vue';
import InfoField from '~/components/Fields/InfoField/InfoField.vue';
import useGameStore from '~/store/game';
import type { Game } from '~/types/games';

const gameStore = useGameStore();

// const results = ref<(number | null)[][]>([[null, null]]);
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
  td,
  :deep(td) {
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

  tfoot :deep(td) {
    border-top: 1px solid #ccc;
  }

  .sumField td {
    font-size: 1.1rem;
    font-weight: bold;
  }

  input {
    all: unset;
    height: 100%;
    width: 100%;
  }

  button {
    all: unset;
    font-size: 1.4rem;
  }
}
</style>
