<template>
  <div class="table-wrapper">
    <table>
      <caption class="sr">
        Current Score
      </caption>
      <thead>
        <tr>
          <th class="round"></th>
          <th v-for="(name, index) in gameStore.players" :key="`playername-${index}`">{{ name }}</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="gameStore.game?.isRoundBased">
          <tr v-for="(result, index) in gameStore.results" :key="`result-line-${index}`">
            <td>{{ index + 1 }}</td>
            <td v-for="(_score, scoreIndex) in result" :key="`result-${index}-${scoreIndex}`">
              <input
                type="number"
                value="score"
                @change="event => {
                    gameStore.results[index][scoreIndex] = Number(event.target?.value);
                }"
              />
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <template v-for="(field, index) in gameStore.game?.footer" :key="`footer-field-${index}`">
          <InfoField v-if="field.type === 'infoField'" :field="field" isFooter />
          <SumField v-else-if="field.type === 'sumField'" :field="field" isFooter/>
          <tr v-else>
            <td>unknown:<br /> {{ field.type }}</td>
          </tr>
        </template>
      </tfoot>
    </table>
  </div>
  <FloatingButton @onClick="addNewResultLine" />
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue';
import FloatingButton from '~/components/FloatingButton/FloatingButton.vue';
import InfoField from '~/components/Fields/InfoField/InfoField.vue';
import SumField from '~/components/Fields/SumField/SumField.vue';
import useGameStore from '~/store/game';
import type { Game } from '~/types/games';

const gameStore = useGameStore();

const addNewResultLine = () => {
  gameStore.results.push([null, null]);
}

onBeforeMount(() => {
  if (gameStore.results.length === 0) {
    addNewResultLine();
  }
});

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
