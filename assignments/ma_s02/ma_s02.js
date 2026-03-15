const Client  = require('fhir-kit-client')  

// Create a FHIR client instance with authentication (using a bearer token)
const fhirClientAuthToken = new Client({
    baseUrl: 'http://fhirserver.hl7fundamentals.org/fhir',
    bearerToken: 'my-secret-token'
});

// Create a FHIR client instance with authentication (using basic auth) - Not recommended for production use
authinfo = "username:password";
let buff = Buffer.from(authinfo, 'utf-8');
let base64data = buff.toString('base64');
const fhirClientAuthBasic = new Client({
    baseUrl: 'http://fhirserver.hl7fundamentals.org/fhir',
    customHeaders: {
        'Authorization': 'Basic ' + base64data
    }
});

console.log ('Creating FHIR client instances with different authentication methods...\n'); 
console.log (fhirClientAuthToken);
console.log (fhirClientAuthBasic);