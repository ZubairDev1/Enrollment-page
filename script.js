const myForm = document.getElementById('myForm');

function handleFormSubmission(event) {
    event.preventDefault();

    const condition = true

    if (condition) {
        alert('Submission Successful!');
        myForm.reset();
    } else {
        alert ('Submission failed, please check your input.')
    }
}

myForm.addEventListener('submit', handleFormSubmission);

