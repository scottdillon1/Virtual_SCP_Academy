'use strict';

const http = require('http');
const request = require('request');
const oauth = require('./oauth');


module.exports = async function (event, context) {
    
    //Event Data
    const eventDataJson = JSON.parse(event.data);
    console.log('Event data Received' + JSON.stringify(eventDataJson));
    
    //Workflow Payload
     const workflowDefinition = 'incidentassignment';
     var payloadJSON = JSON.stringify({
         definitionId: workflowDefinition,
         context: { incidentID: eventDataJson.data.ID }
     });
     
    console.log('workflow payload is ' + payloadJSON)
     
    
    //Workflow Details - Use of Service and construction of Rest Service Endpoint
    const wfService = await context.getServiceCredentialsJSON('workflow-srv');
    const restServiceURL = wfService.endpoints.workflow_rest_url + '/v1/workflow-instances'
    console.log('Workflow Rest Service endpoint URL is ' + restServiceURL);
    
    //Prepare Token for Authorizations & Header
      const token = await oauth.token(context);
      const hdr = { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' };
    console.log('The token retreived ' + JSON.stringify(token));
    
    
    return await post(restServiceURL, hdr, payloadJSON);
    
};


async function post(workflowurl, headers, body) {

    return new Promise((resolve, reject) => {
        console.log('Inside the post function');
        request.post({ url: workflowurl, headers: headers, json: false, body: body }, (err, res, body) => {
            if (err) {
                console.log('we have an error ' + err);
                reject(err);
            } else if (res.statusCode === 201) {
                console.log('return status code 201' + JSON.stringify(body));
                resolve(body);
            } else if ([400, 401, 404, 404, 406].includes(res.statusCode)) {
                reject(new Error(res.statusCode))
            } else {
                reject(new Error('Internal Server Error'))
            }
        });
    })
}