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

submitBtn.disabled = "true";

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

// function showError(input, message){
     
//     const formControl = input.parentElement;
//     formControl.className = 'form-control error';
//     const small = formControl.querySelector('small');
//     small.innerText = message;
//     // small.style.color = "#C70039";
//     small.style.visibility = "visible";
// }

// function removeError(input){
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success';
//     const small = formControl.querySelector('small');
//     small.innerText = "valid";
//     small.style.visibility = "hidden";
// }
                                                   




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
    var formc = `<form action="" id="form" class="form">

    <h2>Passenger 2</h2>
    
    <div class="form-control">
        <label for="firstName">First Name</label>
            <input type="text" id="firstname" placeholder="Enter First Name" required>
        <small id="fner"></small>
        <br>
    </div>
   
    <div class="form-control">
        <label for="secondName">Second Name</label>
        <input type="text" id="secondname" placeholder="Enter Second Name" required>
        <small id="sner"></small>
        <br>
    </div>



    <div class="form-control">
        <label for="age">Age</label>
            <input type="number" id="age" required>
        <small id="aer"></small>
    </div>

    <div class="form-control radio">
            <p>Please select your gender: </p>
        <input type="radio" id="male" name="gender" value="Male" required checked>
        <label for="male">MALE</label>
        <input type="radio" id="female" name="gender" value="Female" required>
        <label for="female">FEMALE</label>
            <input type="radio" id="others" name="gender" value="Others" required>
        <label for="others">Others</label> 
            <small id="ger"></small>
    </div>
    <button id="submit-btn" class="sub2">Submit</button>
</form>`;
form2.innerHTML=formc;
form2.style.backgroundColor = "white";
form2.style.borderRadius = "5px";
form2.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
form2.style.padding = "5%";
}

