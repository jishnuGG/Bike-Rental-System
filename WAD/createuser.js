document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');
    const usernameInput = document.getElementById('newUsername');
    const emailInput = document.getElementById('newEmail');
    const phoneInput = document.getElementById('newPhone');
    const otpCodeInput = document.getElementById('otpCode');
    const sendOtpBtn = document.getElementById('sendOtpBtn');
    const passwordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const privacyPolicyCheckbox = document.getElementById('privacyPolicy');

    let otpSent = false; // Variable to track if OTP has been sent

    // Handle OTP sending
    sendOtpBtn.addEventListener('click', function () {
        const phoneNumber = phoneInput.value.trim();
        if (phoneNumber === '') {
            alert('Please enter a valid phone number.');
            return;
        }
        // Simulate sending OTP (for demonstration purposes)
        alert('OTP sent to ' + phoneNumber);
        otpCodeInput.style.display = 'block';
        otpSent = true;
    });

    // Handle form submission
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Clear any previous error messages
        clearErrorMessage();

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const otpCode = otpCodeInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Check for empty fields
        if (!username || !email || !phone || !password || !confirmPassword) {
            alert('Username, Email, Phone, and Password cannot be empty.');
            return;
        }

        // Check if privacy policy is accepted
        if (!privacyPolicyCheckbox.checked) {
            alert('You must accept the privacy policy.');
            return;
        }

        // Check if OTP is sent and valid
        if (!otpSent) {
            alert('Please verify your phone number with the OTP.');
            return;
        }
        if (otpCode === '') {
            alert('Please enter the OTP.');
            return;
        }

        // Validate form fields
        if (!validateUsername(username)) {
            displayErrorMessage('Username must be at least 4 characters long.');
        } else if (!validateEmail(email)) {
            displayErrorMessage('Please enter a valid email address.');
        } else if (!validatePassword(password)) {
            displayErrorMessage('Password must be at least 6 characters long.');
        } else if (password !== confirmPassword) {
            displayErrorMessage('Passwords do not match.');
        } else {
            // If everything is valid, simulate form submission
            alert('Account successfully created!');
            // Optionally, clear the form fields or redirect to a login page
            signupForm.reset();
            otpCodeInput.style.display = 'none'; // Hide OTP input after successful form submission
        }
    });

    // Validate username (minimum 4 characters)
    function validateUsername(username) {
        return username.length >= 4;
    }

    // Validate email using a basic regex
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    // Validate password (minimum 6 characters)
    function validatePassword(password) {
        return password.length >= 6;
    }

    // Display error message
    function displayErrorMessage(message) {
        const errorMessageDiv = document.createElement('div');
        errorMessageDiv.classList.add('error-message');
        errorMessageDiv.style.color = 'red';
        errorMessageDiv.style.marginTop = '10px';
        errorMessageDiv.textContent = message;
        signupForm.appendChild(errorMessageDiv);
    }
    function clearErrorMessage() {
        const errorMessage = document.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }
});
