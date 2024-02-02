import { defineStore } from 'pinia';
import type { Game } from '~/types/games';

const useGameStore = defineStore('game', {
  state: () => ({
    game: null as Game | null,
    players: [] as string[],
    results: [] as number[][],
  }),
  getters: {},
  actions: {},
});

export default useGameStore;
