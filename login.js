document.getElementById('login-form').addEventListener('submit', function(event) {
    // Get form fields
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Get error message elements
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    
    // Reset error messages
    emailError.textContent = '';
    passwordError.textContent = '';
    
    let isValid = true;
    
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
