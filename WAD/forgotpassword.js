document.addEventListener('DOMContentLoaded', function () {
    const forgotForm = document.querySelector('form');
    const emailInput = document.getElementById('email');

    forgotForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Clear any previous messages
        clearErrorMessage();

        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            // Simulate sending reset link
            alert(`A password reset link has been sent to ${email}`);
            // Optionally, redirect the user to another page or give a success message
            emailInput.value = ''; // Clear the email field
        } else {
            displayErrorMessage('Please enter a valid email address.');
        }
    });

    // Validate email using a basic regex
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    // Display error message
    function displayErrorMessage(message) {
        const errorMessageDiv = document.createElement('div');
        errorMessageDiv.classList.add('error-message');
        errorMessageDiv.style.color = 'red';
        errorMessageDiv.style.marginTop = '10px';
        errorMessageDiv.textContent = message;
        forgotForm.appendChild(errorMessageDiv);
    }

    // Clear any error message
    function clearErrorMessage() {
        const errorMessage = document.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }
});
