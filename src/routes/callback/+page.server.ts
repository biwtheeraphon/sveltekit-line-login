import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
 
export const load = (async ({ url }) => {
  const data = url.searchParams ;
    console.log(data)
  throw error(404, 'Not found');
}) satisfies PageServerLoad;