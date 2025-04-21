// Function to validate the form
function validateForm(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get form fields
    const patientName = document.getElementById('patientName').value.trim();
    const fileNumber = document.getElementById('fileNumber').value.trim();
    const hospitalUnit = document.getElementById('hospitalUnit').value;
    const treatmentSatisfaction = document.querySelector('input[name="treatmentSatisfaction"]:checked');
    const facilitiesSatisfaction = document.querySelector('input[name="facilitiesSatisfaction"]:checked');

    // Validate fields
    if (!patientName) {
        alert('Please enter the patient\'s name.');
        return;
    }

    if (!fileNumber) {
        alert('Please enter the patient\'s file number.');
        return;
    }

    if (!hospitalUnit) {
        alert('Please select the hospital unit.');
        return;
    }

    if (!treatmentSatisfaction) {
        alert('Please select your satisfaction level for the overall treatment.');
        return;
    }

    if (!facilitiesSatisfaction) {
        alert('Please select your satisfaction level for the medical facilities.');
        return;
    }

    // If all fields are valid, submit the form
    alert('Form submitted successfully!');
    document.querySelector('form').submit();
}

// Attach the validateForm function to the form's submit event
document.querySelector('form').addEventListener('submit', validateForm);