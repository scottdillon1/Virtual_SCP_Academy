'use strict';

const oac = require('client-oauth2');
/**
 * @param {Faas.Context} context
 * @return {Promise<*>}
 */
async function token(context) {

  return new Promise(async (resolve, reject) => {
 
    let wfCfg;
    wfCfg = await context.getServiceCredentialsJSON('workflow-srv');
    let endPointURl = wfCfg.uaa.url+'/oauth/token';
    
    const wfOptions = {
      accessTokenUri: endPointURl,
      clientId: wfCfg.uaa.clientid,
      clientSecret: wfCfg.uaa.clientsecret,
      scopes: []
    };
    
    const client = new oac(wfOptions);

    const result = await client.credentials.getToken();
    
    resolve(result.accessToken);
  });
}

module.exports = {
  token
};