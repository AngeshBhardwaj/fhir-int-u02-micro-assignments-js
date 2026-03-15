const Client  = require('fhir-kit-client')  

// Create a FHIR client instance with the base URL of the FHIR server
const fhirClient = new Client({  
    baseUrl: 'http://fhir.hl7fundamentals.org/r4'  
});  

console.log ('Just a skeleton to create FHIR client, so I do nothing!\n'); 
console.log (fhirClient);