var firstName = document.getElementById("firstname");
var lastName = document.getElementById("secondname");
var age = document.getElementById("age");
var email = document.getElementById("email1");
var phoneno = document.getElementById("phone1");
var submitBtn = document.getElementById("submit-btn");
var gender2 = document.querySelector('input[type=radio][name=gender2]:checked');
var firstNamep2 = document.getElementById("firstnamep2");
var lastNamep2 = document.getElementById("secondnamep2");
var agep2 = document.getElementById("agep2");
var submitBtn2 = document.getElementById("submit-btn2");

var name_regex = /^[a-zA-Z]{0,20}$/;
var age_regex = /^(?:1[01][0-9]|1[8-9]|[2-9][0-9]|[2-9][0-9][0-9]|1[2-9][0-9])$/;
var email_regex = /\S+@\S+\.\S+/;
var phone_regex = /^[0-9]{10}$/;

submitBtn.disabled = "true";
// submitBtn2.disabled = "true";

let inputValidator = {
    "firstn": false,
    "lastn": false,
    "ageperson": false,
    "emailid": false,
    "phonenumber": false
};

firstName.addEventListener('input', validateFirstName)
lastName.addEventListener('input', validateLastName)
age.addEventListener('input', validateAge)
email.addEventListener('input', validateEmail)
phoneno.addEventListener('input', validatePhoneNo)

firstNamep2.addEventListener('input', validateFirstName)
lastNamep2.addEventListener('input', validateLastName)
agep2.addEventListener('input', validateAge)

// let allTrue = Object.keys(inputValidator).every((item) => {
//     return inputValidator[item] === true
// });



function buttonRelease(){

    console.log(inputValidator);

    var result = inputValidator.firstn === true && inputValidator.lastn === true && inputValidator.ageperson === true && inputValidator.emailid === true && inputValidator.phonenumber === true;
     
    console.log(result);
    
    if(result){
        
        submitBtn.removeAttribute("disabled");
        console.log("Submit button active");
        submitBtn.style.opacity = "100%";
        submitBtn.style.backgroundColor = "lightblue";
        submitBtn.style.borderColor = "#00468b";
    }
    else{
        submitBtn.disabled = "true";
        console.log("Submit button not active");
        submitBtn.style.opacity = "55%";
        submitBtn.style.backgroundColor = "#00468b";
        
        }
    }

                                                   


function validateFirstName() {

    var small=document.getElementById("fner");

    console.log(firstName.value);

    if (name_regex.test(firstName.value)) {
        valid(firstName);
        small.innerHTML="";
        // removeError(firstName);
        inputValidator.firstn = true;
        buttonRelease();
    }
    
    else {
        invalid(firstName);
        inputValidator.firstn = false;
        // showError(firstName, 'Cannot be empty, Alphabets only, Max 20 characters');
        small.innerHTML="20 Characters Maximum";
    }
}

function validateLastName() {

    var small=document.getElementById("sner");

    console.log(lastName.value);

    if (name_regex.test(lastName.value)) {
        valid(lastName);
        small.innerHTML="";
        //  removeError(lastName);
         inputValidator.lastn = true;
        buttonRelease();
        
    }
    else {

        invalid(lastName);
        inputValidator.lastn = false;
        // showError(lastName, 'Cannot be empty, Alphabets only, Max 20 characters');
        small.innerHTML="20 Characters Maximum";
    }

}

function validateAge() {
    var small=document.getElementById("aer");

    console.log(age.value);

    if (age_regex.test(age.value)) {
        valid(age);
        // removeError(age);
        small.innerHTML="";
        inputValidator.ageperson = true;
        buttonRelease();

    }
    else {

        invalid(age);
        inputValidator.ageperson = false;
        // showError(age, 'Enter a Valid Age. You have to be an adult to book');
        small.innerHTML="Enter a valid age, 18 and above";
    }

}

function validateEmail() {
    var small=document.getElementById("emr");

    console.log(email.value);

    if (email_regex.test(email.value)) {
        valid(email);
        inputValidator.emailid = true;
        small.innerHTML="";
        // removeError(email);
        buttonRelease();
    }
    else {

        invalid(email);
        inputValidator.emailid = false;
        // showError(email, 'Required Field');
        small.innerHTML="Enter a valid email";
    }

}

function validatePhoneNo() {

    var small=document.getElementById("pner");

    console.log(phoneno.value);

    if (phone_regex.test(phoneno.value)) {
        valid(phoneno);
        inputValidator.phonenumber = true;
        buttonRelease();
        small.innerHTML="";
        // removeError(phoneno);
    }
    else {

        invalid(phoneno);
        inputValidator.phonenumber = false;
        // showError(phoneno, 'Please enter a Valid Phone Number (10 Digits)');
        small.innerHTML="Enter a vlid phone number";
    }

}

function valid(element){

    element.style.borderColor = "green";
    element.style.borderWidth = "thin thin";
}

function invalid(element){

    element.style.borderColor = "red";
    element.style.borderWidth = "thin thin";

}


function submitFunc() {

    var gender = document.querySelector('input[type=radio][name=gender]:checked');
    console.log("Gender: " + gender.value);

    localStorage.setItem("FirstName", firstName.value);
    localStorage.setItem("LastName", lastName.value);
    localStorage.setItem("Age", age.value);
    localStorage.setItem("Gender", gender.value);
    localStorage.setItem("EmailID", email.value);
    localStorage.setItem("PhoneNo", phoneno.value);

    console.log("Calling Confirmation Page");

    location.href = "confirmation.html";

}

function newpass() {

    var form2 = document.getElementById("form2");
    form2.style.display = "block";
    var subtn = document.getElementById("submit-btn");
    subtn.parentNode.removeChild(subtn);
    
}

    function submitFunc2() {
    
    localStorage.setItem("FirstNameP2", firstNamep2.value);
    localStorage.setItem("LastNameP2", lastNamep2.value);
    localStorage.setItem("AgeP2", agep2.value);
    localStorage.setItem("GenderP2", gender2.value);

    console.log("Calling Confirmation Page");
     
    location.href = "confirmation.html";
 
    }

function submitbutton () {
    submitFunc();
    submitFunc2();
}