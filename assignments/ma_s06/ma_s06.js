const Client  = require('fhir-kit-client')  

// Create a FHIR client instance with the base URL of the FHIR server
const fhirClient = new Client({  
    baseUrl: 'http://fhirserver.hl7fundamentals.org/fhir',
    customHeaders: {
        'Content-Type': 'application/fhir+json application/fhir+xml',
        'Accept': 'application/fhir+json application/fhir+xml'
    }
});  

// Retrieve the Patient resource with ID 125093 (created from previous assignment) from the FHIR server
console.log('Retrieving Patient resource with ID 125093...');
fhirClient.read({ resourceType: 'Patient', id: '125093' })
    .then((myPatient) => {
        console.log('Patient resource retrieved successfully:');
        console.log('Original Patient data:');
        console.log(myPatient);
        updatePatient(myPatient);
    })
    .catch((error) => {
        console.error('Error retrieving Patient resource:', error);
    });

function updatePatient(patientData) {
    console.log('Updating Patient resource with ID 125093...');
    let updatedPatientData = updatePatientData(patientData);
    updatePatientFHIR(patientData.id, updatedPatientData);
}

function updatePatientData(patientData) {
    let updatedPatientData = JSON.parse(JSON.stringify(patientData)); // Deep copy of the original patient data
    // Update the patient's telecom and address information
    updatedPatientData.telecom = [
        {
            "system": "phone", 
            "value": "613-555-5555",
            "use": "home"
        }
    ];
    updatedPatientData.address = [
        {
            "line": ["3600 Papineau Avenue"],
            "city": "Montreal",
            "state": "Quebec",
            "postalCode": "H2K 4J5",
            "country": "Canada"
        }
    ];
    return updatedPatientData;
}


function updatePatientFHIR(patientId, updatedPatientData) {
    fhirClient.update({ resourceType: 'Patient', id: patientId, body: updatedPatientData })
        .then((response) => {
            console.log(`Patient resource with ID ${patientId} updated successfully:`);
            console.log(response);
        })
        .catch((error) => {
            console.error(`Error updating Patient resource with ID ${patientId}:`, error);
        });
}
