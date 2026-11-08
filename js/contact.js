// Contact form validations and mailto for the Contact Us page

const cForm = document.getElementById("contactForm");

cForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const type = document.getElementById("contactType").value;
  const message = document.getElementById("contactMessage").value.trim();
  //retrieves the values/information user has typed in


  const nameError = document.getElementById("contactNameError");
  const emailError = document.getElementById("contactEmailError");
  const typeError = document.getElementById("contactTypeError");
  const messageError = document.getElementById("contactMessageError");
  const reply = document.getElementById("contactResponse");
  //retrieves these errors that user typed 
  
  nameError.textContent = "";
  emailError.textContent = "";
  typeError.textContent = "";
  messageError.textContent = "";
  reply.textContent = "";
  //clears any previous messages or old messages


  let valid = true;

 
  if (name === "") {
    nameError.textContent = "Please enter your full name.";
    valid = false;
  }
  //validates if the user entered a name
  


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Please enter your email address.";
    valid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }
  //validates if the user entered nothing or an incorrect email
  
  if (type === "") {
    typeError.textContent = "Please choose what your message is about.";
    valid = false;
  }
  // validates if a message type has been chosen
 
  if (message === "") {
    messageError.textContent = "Please type your message.";
    valid = false;
  }
  //validates if user entered a message
  
  if (valid) {
    const toAddress = "theinformationprovider@TDP.co.za";
    const subject = type + " from " + name;
    const body =
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Message type: " + type + "\n\n" +
      "Message:\n" + message;
   // If validation has been succcessful then it will build a mailto email
   
    const mailtoLink = "mailto:" + toAddress +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
     // These components makes spaces and line breaks safe inside a link


    
    window.location.href = mailtoLink;
    // Open the user's email app with everything already filled in


    reply.textContent =
      "Thanks, " + name + "! Your email app is opening with your message ready to send.";
    cForm.reset();
  }
});