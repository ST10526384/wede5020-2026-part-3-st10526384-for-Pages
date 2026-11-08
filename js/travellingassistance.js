const page = document.getElementById("assistanceForm");

page.addEventListener("submit", function (event){

    event.preventDefault();
//This stops the page reloading

const fullname = document.getElementById("fullname").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();
//retrieves the values/information user has typed in

const errorName = document.getElementById("errorName");
const errorEmail = document.getElementById("errorEmail");
const errorMessage = document.getElementById("errorMessage");
const formSuccessful = document.getElementById("pageSuccessful");
//retrieves these errors that user typed 

errorName.textContent = "";
errorMessage.textContent = "";
errorEmail.textContent = "";
formSuccessful.textContent = "";
//clears any previous messages

let valid = true

const ePattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//checks/validates if the email has this pattern format
if(email === "") {
    errorEmail.textContent = "PLease enter an email";
    valid = false;
} else if (!ePattern.test(email)) {
    errorEmail.textContent = "Please enter a correct email to be used";
    valid = false;
}
//validates if the user entered nothing or an incorrect email


if(fullname === "") {
    errorName.textContent = "Please enter your full name";
    valid = false;
}
//validates if user entered a name


if (message === "") {
    errorMessage.textContent = "Please enter a message about what you need help with";
    valid = false;

} else if (message.length < 10) {
    errorMessage.textContent = "Please give us enough information in order to assist you";
    valid = false;
}
//validates if user entered a message and has more than 10 characters




if (valid) {
    formSuccessful.textContent = "Thank you for asking us for help, we will respond to you as soon as possible";
    page.reset();
}
});