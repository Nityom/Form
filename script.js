let randomPIN;

function generateRandomPIN() {
    return Math.floor(1000 + Math.random() * 9000);
}

function sendRandomPIN() {
    const phoneNumber = document.getElementById('number').value;
    randomPIN = generateRandomPIN();
    console.log(`Random PIN: ${randomPIN}`);
}

function verifyRandomPIN() {
    const enteredPIN = document.getElementById('pin').value;
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    if (enteredPIN === randomPIN.toString()) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}
