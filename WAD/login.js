// External JavaScript file to validate the login form

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Clear previous errors
    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';

    // Get form values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;

    // Validate username
    if (username === '') {
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    }

    // Validate password
    if (password === '') {
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // If valid, submit the form (Here you can add your backend login process)
    if (isValid) {
        alert('Login successful!');
        // Redirect to home page or authenticated page
        window.location.href = 'home.html';
    }
});
