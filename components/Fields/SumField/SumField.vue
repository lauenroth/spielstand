<template>
  <tr class="info" :class="{ footer: isFooter }">
    <td>Sum</td>
    <td v-for="index in gameStore.players.length" :key="`sum-${index}`">{{ getSum(index - 1) }}</td>
  </tr>
</template>

<script lang="ts" setup>
import useGameStore from '~/store/game';
import type { SumField } from '~/types/games';

interface SumFieldProps {
  field: SumField;
  isFooter?: boolean;
}

defineProps<SumFieldProps>();

const gameStore = useGameStore();

const getSum = (index: number) => gameStore.results.reduce((sum, result) => {
  sum += result[index];
  return sum;
}, 0);
</script>