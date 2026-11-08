//This page will be similiar to how the travellingassistance and destinationvsdestination deals with validation and response

const eForm = document.getElementById("enquiryForm");

const infoPlace = {
    "Cape Town": {
        price: "From R4000 - R4500 per person", availability: "Anytime of the year but busy in December"
    },
    "Johannesburg": {
        price: "From R2000 - R3000 per person", availability: "Anytime of the year"
    },
    "Kruger National Park": {
        price: "From R3000 - R3500 per person", availability: "Dry seasons or cool winter"
    },
    "Garden Route District Municipality": {
        price: "From R4500 - R5000 per person", availability: "Best to come October till April or warm times"
    },
    "Drakensberg": {
        price: "From R3000 - R3200 per person", availability: "Recommended in autumn or spring"
    },
    "Durban": {
        price: "From R3800 - R4000 per person", availability: "Anytime of the year"
    },
};
//adding the price and availability for the different places


eForm.addEventListener("submit", function(event){
    event.preventDefault();


    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const location = document.getElementById("destination").value;
//retrieves the values/information user has typed in

     const errorName = document.getElementById("enquiryNameError");
    const errorEmail = document.getElementById("enquiryEmailError");
    const errorPhone = document.getElementById("enquiryPhoneError");
    const errorLocation = document.getElementById("enquiryPlaceError");
    const reply = document.getElementById("enquiryResponse")
    //retrieves these errors that user typed 


    errorName.textContent = "";
    errorEmail.textContent = "";
    errorPhone.textContent = "";
    errorLocation.textContent = "";
    reply.textContent = "";
//clears any previous/old messages
    


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

const pPattern = /^[0-9+\-\s]{10,}$/;
//holds phone format 


if (phone === "") {
    errorPhone.textContent = "Please enter your phone number ";
    valid = false;

} else if (!pPattern.test(phone)) {
    errorPhone.textContent = "Please enter a valid South African phone number";
    valid = false;
}
//validates if user entered a phone number and also is a proper South African phone number

if(location === ""){
    errorLocation.textContent = "Please choose/select a place";
    valid = false;
}
//checks if user selected a place


if(valid){
   const information = infoPlace[location];
   
   reply.textContent = "Thank you, " + fullname + " for selecting " + location + ": " + information.price + ". Availability: " 
   + information.availability + ". We will email " + email + " to give you more information if needed";
   eForm.reset();
}
});