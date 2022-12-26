import type { Actions } from './$types';
 
export const actions: Actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();
    const linAutURL = 'https://access.line.me/oauth2/v2.1/authorize'
    const responseType = 'code', clientId = 1657770559, redirect_uri='http://localhost:5173/callback'
    const uri = `${linAutURL}?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirect_uri}&state=12345abcde&scope=openid%20email`
    return {uri: uri}
  },
};