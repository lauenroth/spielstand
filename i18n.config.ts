export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    de: {
      title: 'Spielstand',
      language: 'Sprache',
      players: 'Spieler',
      teams: 'Teams',
    },
    en: {
      title: 'Score',
      language: 'Language',
      players: 'Players',
      teams: 'Teams',
    },
  },
}));
