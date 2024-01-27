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
    const submitButton = document.getElementById('submitButton');

    if (enteredPIN === randomPIN.toString()) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        submitButton.disabled = false;
    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        submitButton.disabled = true;
    }
}

document.getElementById('form').addEventListener('submit', function (event) {
    if (document.getElementById('submitButton').disabled) {
        event.preventDefault();
        console.log("Cannot submit the form until PIN is verified.");
    }
});
