export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    de: {
      title: 'Spielstand',
      language: 'Sprache',
      players: 'Spieler',
      teams: 'Teams',
      newGame: 'Custom Spiel',
      startNewGame: 'Neues Spiel starten',
    },
    en: {
      title: 'Scoring Board',
      language: 'Language',
      players: 'Players',
      teams: 'Teams',
      newGame: 'Custom Game',
      startNewGame: 'Start New Game',
    },
  },
}));
