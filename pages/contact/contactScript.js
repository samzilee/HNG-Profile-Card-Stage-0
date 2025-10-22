const form = document.querySelector("form");

const full_name = document.getElementById("full_name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const submit_btn = document.getElementById("submit")

const error_name = document.getElementById("error_name");
const error_email = document.getElementById("error_email");
const error_subject = document.getElementById("error_subject");
const error_message = document.getElementById("error_message");

const success = document.getElementById("success-message")

let error = false;

const handleSubmit = (e) => {    
    e.preventDefault();

    error_name.textContent = "";
    error_message.textContent = "";
    error_subject.textContent = "";
    error_email.textContent = "";
    
    full_name.style.borderColor = "#3b83f6ab";
    email.style.borderColor = "#3b83f6ab";
    subject.style.borderColor = "#3b83f6ab";
    message.style.borderColor = "#3b83f6ab";

    const [firstName, lastName] = full_name.value.split(" ");

    if(full_name.value === "") {
        error_name.textContent = "Enter your full name";
        full_name.style.borderColor = "red"; 
        error = true;
    } else if(!lastName) {
        error_name.textContent = "Please enter a valid full name (first and last name)";
        full_name.style.borderColor = "red";
        error = true;
    }else{
        error = false;
    }

    if(email.value === "" || !email.value.includes("@") || !email.value.includes(".com")) {
        error_email.textContent = "Please enter a valid email";
        email.style.borderColor = "red";
        error = true;
    }else{
        error = false;
    }

    if(subject.value === "") {
        error_subject.textContent = "Field required";
        subject.style.borderColor = "red";
        error = true;
    }else if (subject.value.length < 3 ){
        error_subject.textContent = "Subject must be at least 3 characters";
        subject.style.borderColor = "red";
        error = true;
    }else{
        error = false;
    }
    

    if(message.value === "") {
        error_message.textContent = "Please enter a valid message";
        message.style.borderColor = "red";
        error = true;
    } else if(message.value.length < 10) {
        error_message.textContent = "Message must be at least 10 characters";
        message.style.borderColor = "red";
        error = true;
    }else{
        error = false;
    }



    if (!error) {
        full_name.value = "";
        email.value = "";
        subject.value = "";
        message.value = "";

        error_name.textContent = "";
        error_message.textContent = "";
        error_subject.textContent = "";
        error_email.textContent = "";

        full_name.style.borderColor = "#3b83f6ab";
        email.style.borderColor = "#3b83f6ab";
        subject.style.borderColor = "#3b83f6ab";
        message.style.borderColor = "#3b83f6ab";

        submit_btn.textContent = "Sent";
        submit_btn.style.backgroundColor = "green";
        success.textContent = "Form submitted successfully!";

        const reset = setTimeout(() => {  
            submit_btn.textContent = "Submit";
            submit_btn.style.backgroundColor = "#3b82f6";
            success.textContent = "";
        }, 5000);

        return () => clearTimeout(reset);
    }
   
}

form.addEventListener("submit", handleSubmit);

full_name.addEventListener("input", (e) => {

    if(!error) return;

    const [firstName, lastName] = full_name.value.split(" ");

    if(full_name.value === "") {
        error_name.textContent = "Enter your full name";
        full_name.style.borderColor = "red"; 
        error = true;
    } else if(!lastName) {
        error_name.textContent = "Please enter a valid full name (first and last name)";
        full_name.style.borderColor = "red";
        error = true;
    }else {  
        error_name.textContent = "";
        full_name.style.borderColor = "#3b83f6ab";
    }
});
email.addEventListener("input", (e) => {

    if(!error) return;

    if(email.value === "" || !email.value.includes("@") || !email.value.includes(".com")) {
        error_email.textContent = "Please enter a valid email";
        email.style.borderColor = "red";
        error = true;
    }else {  
        error_email.textContent = "";
        email.style.borderColor = "#3b83f6ab";
    }

});
subject.addEventListener("input", (e) => {

    if(!error) return;

    if(subject.value === "") {
        error_subject.textContent = "Field required";
        subject.style.borderColor = "red";
        error = true;
    }else if (subject.value.length < 3 ){
        error_subject.textContent = "Subject must be at least 3 characters";
        subject.style.borderColor = "red";
        error = true;
    }else {  
        error_subject.textContent = "";
        subject.style.borderColor = "#3b83f6ab";
    }

});
message.addEventListener("input", (e) => {

    if(!error) return;

    if(message.value === "") {
        error_message.textContent = "Please enter a valid message";
        message.style.borderColor = "red";
        error = true;
    } else if(message.value.length < 10) {
        error_message.textContent = "Message must be at least 10 characters";
        message.style.borderColor = "red";
        error = true;
    }else{
        error_message.textContent = "";
        message.style.borderColor = "#3b83f6ab";
    }
    
});


    
    
   