const Client  = require('fhir-kit-client')  

// Create a FHIR client instance with the base URL of the FHIR server
const fhirClient = new Client({  
    baseUrl: 'http://fhirserver.hl7fundamentals.org/fhir',
    customHeaders: {
        'Content-Type': 'application/fhir+json application/fhir+xml',
        'Accept': 'application/fhir+json application/fhir+xml'
    }
});  

// Read a Patient resource with a specific ID
fhirClient.read({ resourceType: 'Patient', id: '339' })
    .then((response) => {
        console.log('Patient resource retrieved successfully:');
        console.log(response);
    })
    .catch((error) => {
        console.error('Error retrieving Patient resource:', error);
    });