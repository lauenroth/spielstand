import { defineEventHandler, H3Event } from 'h3';
import canasta from '~/games/canasta.json';
import { Game } from '~/types/games';

export default defineEventHandler(async (event: H3Event) => {
  const games = { canasta };

  if (!event.context.params?.template) {
    throw new Error('Missing parameter in request!');
  }

  const template = event.context.params.template;

  if (Object.keys(games).includes(template)) {
    return games[template] as Game;
  }

  // const { UDG_API, UDG_AUTH } = useRuntimeConfig();

  // return $fetch(`https://${UDG_API}/rest/import/guidecom/listWithImages`, {
  //   headers: { Authorization: `basic ${btoa(UDG_AUTH)}` },
  // });
});
