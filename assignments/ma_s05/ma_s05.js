const Client  = require('fhir-kit-client')  

// Create a FHIR client instance with the base URL of the FHIR server
const fhirClient = new Client({  
    baseUrl: 'http://fhirserver.hl7fundamentals.org/fhir',
    customHeaders: {
        'Content-Type': 'application/fhir+json application/fhir+xml',
        'Accept': 'application/fhir+json application/fhir+xml'
    }
});  

// Define a new Patient resource to be created on the FHIR server
const newPatient = {
    "resourceType": "Patient",
    "identifier": [
        {
            "system": " http://testpatient.id/mrn/",
            "value": " 99999999"
        }
    ],
    "name": [
        {
            "family": "Smith",
            "given": ["Alan"]
        }
    ],
    "gender": "male",
    "birthDate": "1965-05-06"
};

// Create a new Patient resource on the FHIR server
fhirClient.create({ resourceType: 'Patient', body: newPatient })
    .then((response) => {
        console.log('New Patient resource created successfully:');
        console.log(response);
    })
    .catch((error) => {
        console.error('Error creating Patient resource:', error);
    }); 


// Patients created using this assignment
// 124961, 124962, 124963, 124964, 124965 | 125093 - Actual Object to be used in the next assignment
