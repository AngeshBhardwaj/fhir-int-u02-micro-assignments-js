const Client  = require('fhir-kit-client')  

// Create a FHIR client instance with the base URL of the FHIR server
const fhirClient = new Client({  
    baseUrl: 'http://fhirserver.hl7fundamentals.org/fhir',
    customHeaders: {
        'Content-Type': 'application/fhir+json application/fhir+xml',
        'Accept': 'application/fhir+json application/fhir+xml'
    }
});  

// Deleting the Patient resource with ID 125093 (created from previous assignment) from the FHIR server
console.log('Deleting Patient resource with ID 125093...');
fhirClient.delete({ resourceType: 'Patient', id: '125093' })
    .then((response) => {
        console.log('Patient resource with ID 125093 deleted successfully:');
        console.log(response);
    })
    .catch((error) => {
        console.error('Error deleting Patient resource with ID 125093:', error);
    });

