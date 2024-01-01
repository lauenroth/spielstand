export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    de: {
      title: 'Spielstand',
      language: 'Sprache',
      players: 'Spieler',
      teams: 'Teams',
      newGame: 'Neues Spiel',
      startNewGame: 'Neues Spiel starten',
    },
    en: {
      title: 'Score',
      language: 'Language',
      players: 'Players',
      teams: 'Teams',
      newGame: 'New Game',
      startNewGame: 'Start New Game',
    },
  },
}));
