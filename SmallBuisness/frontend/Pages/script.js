// Validation of contact form
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    console.log('Form submission event triggered'); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '') {
        alert('Name is required');                        // nonempty name
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address');     // validate email
        return;
    }

    if (message === '') {
        alert('Message is required');                    // non empty message
        return;
    }

    
    alert('Form submitted successfully');            
});

function validateEmail(email) {
    console.log('Validating email:', email); 
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = re.test(String(email).toLowerCase());
    console.log('Email validation result:', isValid); 
    return isValid;
}
