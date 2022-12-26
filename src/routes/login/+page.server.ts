import type { Actions } from './$types';
 
export const actions: Actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();
    const linAutURL = 'https://access.line.me/oauth2/v2.1/authorize'
    const responseType = 'code', clientId = 1657770559, redirect_uri=''
    console.log("Hitt")
    return { success: true };
  },
};