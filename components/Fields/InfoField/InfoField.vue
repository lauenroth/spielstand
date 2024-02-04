<template>
  <tr class="info" :class="{ footer: isFooter }">
    <td>{{ field.name }}</td>
    <td v-for="index in gameStore.results[0]">{{ field.default }}</td>
  </tr>
</template>

<script lang="ts" setup>
import useGameStore from '~/store/game';
import type { InfoField } from '~/types/games';

interface InfoFieldProps {
  field: InfoField;
  isFooter?: boolean;
}

defineProps<InfoFieldProps>();

const gameStore = useGameStore();
</script>

<style lang="scss" scoped>
.footer td {
  background-color: transparent;
  color: #eee;

  &:first-child {
    font-size: 0.8rem;
  }
}
</style>
