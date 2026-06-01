// This flag would be set based on actual login status in a real application
let isLoggedIn = false;

window.addEventListener('scroll', function() {
    if (!isLoggedIn) {
        alert('You must log in to access this part of the website.');
        window.location.href = 'login.html'; // Redirect to the login page
    }
});
