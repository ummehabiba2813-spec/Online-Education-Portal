document.getElementById('signup-form').addEventListener('submit', function(event) {
    // Get form fields
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    
    // Get error message elements
    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    
    // Reset error messages
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    
    let isValid = true;
    
    // Validate username
    if (username === '') {
        usernameError.textContent = 'Username is required';
        isValid = false;
    }
    
    // Validate email
    if (email === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Invalid email address';
        isValid = false;
    }
    
    // Validate password
    if (password === '') {
        passwordError.textContent = 'Password is required';
        isValid = false;
    }
    
    // Validate confirm password
    if (confirmPassword === '') {
        confirmPasswordError.textContent = 'Confirm password is required';
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
        isValid = false;
    }
    
    // If any field is invalid, prevent form submission
    if (!isValid) {
        event.preventDefault();
    }
});

// Helper function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
