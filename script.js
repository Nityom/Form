let usedPins = [];
let randomPIN;
let phoneNumberFilled = false;
let nameFilled = false;
let isVerified = false; // Added isVerified variable

function generateRandomPIN() {
    let newPIN;
    do {
        newPIN = Math.floor(1000 + Math.random() * 9000);
    } while (usedPins.includes(newPIN));

    usedPins.push(newPIN);
    return newPIN;
}

function sendRandomPIN() {
    const phoneNumber = document.getElementById('number').value;
    const name = document.getElementById('name').value;

    if (phoneNumber && name) {
        phoneNumberFilled = true;
        nameFilled = true;

        randomPIN = generateRandomPIN();
        console.log(`Random PIN: ${randomPIN}`);
    } else {
        alert('Please fill in both phone number and name before generating PIN.');
    }
}

function verifyRandomPIN() {
    const enteredPIN = document.getElementById('pin').value;
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    if (enteredPIN === randomPIN.toString()) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        isVerified = true; // Set isVerified to true after successful verification
    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        isVerified = false; // Set isVerified to false if verification fails
    }
}

function verifyAndHandleClick() {
    const enteredPIN = document.getElementById('pin').value;
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    if (phoneNumberFilled && nameFilled) {
        if (enteredPIN === randomPIN.toString()) {
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            isVerified = true;
            // Perform additional actions or redirection here
            // For example, uncomment the line below to redirect to 'ok.html':
            
        } else {
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            isVerified = false;
        }
    } else {
        alert('Please fill in both phone number and name before submitting.');
        isVerified = false;
    }
}

function handleClick() {
    const enteredPIN = document.getElementById('pin').value;
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    if (isVerified) {
        // Perform the action, e.g., form submission or redirection
        window.location.href = 'ok.html';
    } else {
        alert('Please verify the PIN before submitting.');
    }
}
