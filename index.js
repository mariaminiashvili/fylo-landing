const emailInput = document.getElementById("email");
const getButton = document.getElementById("get");
const  button = document.getElementById("support-button");
const emailButton = document.getElementById("email-support");
const errorDiv = document.querySelector(".error-div");
const errorSupport = document.querySelector(".error-support");



getButton.addEventListener("click", (event) => {
    event.preventDefault();
    testMail(emailInput, errorDiv);    
    console.log("click");
})

button.addEventListener("click", (event) => {
    event.preventDefault();
    testMail(emailButton, errorSupport);
    console.log("click");
})

let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function testMail(input, error){
    if(mailRegex.test(input.value)){
        console.log("this is true");
        input.classList.add('success');
        input.classList.remove('error');
        error.firstElementChild.style.display = "block";
        error.lastElementChild.style.display = "none";

} else if(!mailRegex.test(input.value)){
    console.log("this is false");
    input.classList.add('error');
    input.classList.remove('success');
    error.firstElementChild.style.display = "none";
    error.lastElementChild.style.display = "block";

    console.log(error.firstElementChild)
}else{ 
    error.firstElementChild.style.display = "none";
    error.lastElementChild.style.display = "none";
}
}