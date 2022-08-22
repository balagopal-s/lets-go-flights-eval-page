var firstName = document.getElementById("firstname");
var lastName = document.getElementById("secondname");
var age = document.getElementById("age");
var email = document.getElementById("email1");
var phoneno = document.getElementById("phone1");
var submitBtn = document.getElementById("submit-btn");

var name_regex = /^[a-zA-Z]{0,20}$/;
var age_regex = /^(?:1[01][0-9]|1[8-9]|[2-9][0-9]|[2-9][0-9][0-9]|1[2-9][0-9])$/;
var email_regex = /\S+@\S+\.\S+/;
var phone_regex = /^[0-9]{10}$/;

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

// let allTrue = Object.keys(inputValidator).every((item) => {
//     return inputValidator[item] === true
// });

submitBtn.disabled=true;

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

function showError(input, message){
     
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
    // small.style.color = "#C70039";
    small.style.visibility = "visible";
}

function removeError(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.innerText = "valid";
    small.style.visibility = "hidden";
}
                                                   
// if (!allTrue) {

//     console.log("Submit Button Active");
//     submitBtn.disabled = "false";
// }

// else {

//     console.log("Submit Button not active");
//     submitBtn.disabled = "true";
// }




function validateFirstName() {

    console.log(firstName.value);

    if (name_regex.test(firstName.value)) {
        valid(firstName);
        inputValidator.firstn = true;
        buttonRelease();
        removeError(firstName);
    }
    
    else {

        invalid(firstName);
        inputValidator.firstn = false;
        showError(firstName, 'Cannot be empty, Alphabets only, Max 20 characters');
    }
}

function validateLastName() {

    console.log(lastName.value);

    if (name_regex.test(lastName.value)) {
        valid(lastName);
        inputValidator.lastn = true;
        buttonRelease();
        removeError(lastName);

    }
    else {

        invalid(lastName);
        inputValidator.lastn = false;
        showError(lastName, 'Cannot be empty, Alphabets only, Max 20 characters');

    }

}

function validateAge() {

    console.log(age.value);

    if (age_regex.test(age.value)) {
        valid(age);
        inputValidator.ageperson = true;
        buttonRelease();
        removeError(age);

    }
    else {

        invalid(age);
        inputValidator.ageperson = false;
        showError(age, 'Enter a Valid Age. You have to be and adult to book');
    }

}

function validateEmail() {

    console.log(email.value);

    if (email_regex.test(email.value)) {
        valid(email);
        inputValidator.emailid = true;
        buttonRelease();
        removeError(email);
    }
    else {

        invalid(email);
        inputValidator.emailid = false;
        showError(email, 'Required Field');

    }

}

function validatePhoneNo() {

    console.log(phoneno.value);

    if (phone_regex.test(phoneno.value)) {
        valid(phoneno);
        inputValidator.phonenumber = true;
        buttonRelease();
        removeError(phoneno);
    }
    else {

        invalid(phoneno);
        inputValidator.phonenumber = false;
        showError(phoneno, 'Please enter a Valid Phone Number (10 Digits)');
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

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log('clicked');

//     if(firstname.value === '') {
//         showError(firstname, 'firstname is required');
//     }
    
//     if(secondname.value === '') {
//         showError(secondname, 'secondname is required');
//     }
    

// });

function submitFunc() {

    // var gender = displayRadioValue();
    // console.log("Gender:" + gender);

    
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