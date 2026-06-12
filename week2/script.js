document.addEventListener('DOMContentLoaded', () => {
    
    // --- Signup Page Logic ---
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            const userName = document.getElementById('name').value;
            // Store the user's name
            localStorage.setItem('clothiqueUserName', userName);
            window.location.href = 'dashboard.html';
        });
    }

    // --- Login Page Logic ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real app, you'd verify credentials here
            window.location.href = 'dashboard.html';
        });
    }

    // --- Dashboard Logic ---
    const welcomeElement = document.getElementById('welcomeMessage');
    if (welcomeElement) {
        const storedName = localStorage.getItem('clothiqueUserName');
        if (storedName) {
            welcomeElement.innerText = 'Welcome back, ' + storedName + '!';
        } else {
            welcomeElement.innerText = 'Welcome back!';
        }
    }
});

// --- Global Functions ---
function addToCart(productName) {
    alert(productName + ' has been added to your cart!');
}