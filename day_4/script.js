const slider = document.getElementById('myRange');
const minValueDisplay = document.getElementById('minValue');
const maxValueDisplay = document.getElementById('maxValue');

slider.oninput = function () {
    minValueDisplay.textContent = this.value; 
};

minValueDisplay.textContent = slider.value; 

const passwordBox = document.getElementById("password");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*(){}[]|-.,_+";


// write a function to generate a random password

function generatePassword() {
    let password = "";
    let characters = upperCase + lowerCase + number + symbol;
    for (let i = 0; i < slider.value; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
}