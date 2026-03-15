const Client  = require('fhir-kit-client')  

// Create a FHIR client instance with the base URL of the FHIR server
const fhirClient = new Client({  
    baseUrl: 'http://fhirserver.hl7fundamentals.org/fhir',
    customHeaders: {
        'Content-Type': 'application/fhir+json application/fhir+xml',
        'Accept': 'application/fhir+json application/fhir+xml'
    }
});  

// Read a Patient resource with a specific ID and version. id and version could be a number or a string.
fhirClient.vread({ resourceType: 'Patient', id: 339, version: 2 })
    .then((response) => {
        console.log('Patient resource version retrieved successfully:');
        console.log(response);
    })
    .catch((error) => {
        console.error('Error retrieving Patient resource version:', error);
    });