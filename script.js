document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const appleId = document.getElementById('appleId').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!appleId || !password) {
        alert('Please enter both Apple ID and password.');
        return;
    }

    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(appleId)) {
        alert('Please enter a valid Apple ID email address.');
        return;
    }

    // For demonstration, just alert success
    alert('Sign in successful!');

    // Here you would typically handle the login logic, e.g., send data to server
});

// Buy button click handler
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = button.getAttribute('data-price');
        alert(`You have bought the ${product} for $${price}. Thank you for your purchase!`);
    });
});
