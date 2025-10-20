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

    if(full_name.value === "") return (error_name.textContent = "Please all fields required", full_name.focus(), full_name.style.borderColor = "red");

    if(email.value === "" || !email.value.includes("@") || !email.value.includes(".com")) return (error_email.textContent = "Please enter a valid email", email.focus(), email.style.borderColor = "red");

    if(subject.value === "") return (error_subject.textContent = "Field required", subject.focus(), subject.style.borderColor = "red");

    if(message.value === "") return (error_message.textContent = "Please enter a valid message", message.focus(), message.style.borderColor = "red");

    if(message.value.length < 10) return (error_message.textContent = "Message must be at least 10 characters", message.focus(), message.style.borderColor = "red");

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

    submit_btn.textContent = "Submitted";
    submit_btn.style.backgroundColor = "green";
    success.textContent = "Form submitted successfully!";

    const reset = setTimeout(() => {  
        submit_btn.textContent = "Submit";
        submit_btn.style.backgroundColor = "#3b82f6";
        success.textContent = "";
    }, 5000);

    return () => clearTimeout(reset);
}

form.addEventListener("submit", handleSubmit)

full_name.addEventListener("input", (e) => { 
    error_name.textContent = "";
    full_name.style.borderColor = "#3b83f6ab";
});
email.addEventListener("input", (e) => {
    error_email.textContent = "";
    email.style.borderColor = "#3b83f6ab";
});
subject.addEventListener("input", (e) => {
    error_subject.textContent = "";
    subject.style.borderColor = "#3b83f6ab";
});
message.addEventListener("input", (e) => {
    if(e.target.value.length  >= 10){
      error_message.textContent = "";
    message.style.borderColor = "#3b83f6ab"; console.log(e);   
    }
    
});



    
    
   