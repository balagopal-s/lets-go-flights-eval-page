//get details of first passenger
var firstName = document.getElementById("firstname");
var lastName = document.getElementById("secondname");
var age = document.getElementById("age");
var email = document.getElementById("email1");
var phoneno = document.getElementById("phone1");
var submitBtn = document.getElementById("submit-btn");

//get details of second passenger
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

let inputValidator2 = {
    "firstn": false,
    "lastn": false,
    "ageperson": false
};

//listening to fields
firstName.addEventListener('input', validateFirstName)
lastName.addEventListener('input', validateLastName)
age.addEventListener('input', validateAge)
email.addEventListener('input', validateEmail)
phoneno.addEventListener('input', validatePhoneNo)

firstNamep2.addEventListener('input', validateFirstName2)
lastNamep2.addEventListener('input', validateLastName2)
agep2.addEventListener('input', validateAge2)




//function to release the button
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

                                                   
//for passenger FORM1

function validateFirstName() {

    var small=document.getElementById("fner");

    console.log(firstName.value);

    if (name_regex.test(firstName.value)) {
        valid(firstName);
        small.innerHTML="";
        inputValidator.firstn = true;
        buttonRelease();
    }
    
    else {
        invalid(firstName);
        inputValidator.firstn = false;
        small.innerHTML="20 Characters Maximum";
    }
}

function validateLastName() {

    var small=document.getElementById("sner");

    console.log(lastName.value);

    if (name_regex.test(lastName.value)) {
        valid(lastName);
        small.innerHTML="";
         inputValidator.lastn = true;
        buttonRelease();
        
    }
    else {

        invalid(lastName);
        inputValidator.lastn = false;
        small.innerHTML="20 Characters Maximum";
    }

}

function validateAge() {
    var small=document.getElementById("aer");

    console.log(age.value);

    if (age_regex.test(age.value)) {
        valid(age);
        small.innerHTML="";
        inputValidator.ageperson = true;
        buttonRelease();

    }
    else {

        invalid(age);
        inputValidator.ageperson = false;
        small.innerHTML="Enter a valid age, 18 and above";
    }

}

//Validation for passenger FORM 2

function validateFirstName2() {

    var small=document.getElementById("fner2");

    console.log(firstNamep2.value);

    if (name_regex.test(firstNamep2.value)) {
        valid(firstNamep2);
        small.innerHTML="";
        inputValidator2.firstn = true;
        buttonRelease();
    }
    
    else {
        invalid(firstNamep2);
        inputValidator2.firstn = false;
        small.innerHTML="20 Characters Maximum";
    }
}

function validateLastName2() {

    var small=document.getElementById("sner2");

    console.log(lastNamep2.value);

    if (name_regex.test(lastNamep2.value)) {
        valid(lastNamep2);
        small.innerHTML="";
         inputValidator2.lastn = true;
        
    }
    else {

        invalid(lastNamep2);
        inputValidator2.lastn = false;
        small.innerHTML="20 Characters Maximum";
    }

}

function validateAge2() {
    var small=document.getElementById("aer2");

    console.log(agep2.value);

    if (age_regex.test(agep2.value)) {
        valid(agep2);
        small.innerHTML="";
        inputValidator2.ageperson = true;

    }
    else {

        invalid(agep2);
        inputValidator2.ageperson = false;
        small.innerHTML="Enter a valid age, 18 and above";
    }

}


//phone and email validation for FORM1
function validateEmail() {
    var small=document.getElementById("emr");

    console.log(email.value);

    if (email_regex.test(email.value)) {
        valid(email);
        inputValidator.emailid = true;
        small.innerHTML="";
    }
    else {

        invalid(email);
        inputValidator.emailid = false;
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
    }
    else {

        invalid(phoneno);
        inputValidator.phonenumber = false;
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




//Form 2
function newpass() {

    var form2 = document.getElementById("form2");
    form2.style.display = "block";
    var subtn = document.getElementById("submit-btn");
    subtn.parentNode.removeChild(subtn);
    localStorage.setItem("pass2exist",1);
}
    
//setting flag default for 1 pass only
localStorage.setItem("pass2exist",0);
   

//function for submit action
    function submitbutton () {
    
        
        var gender2 = document.querySelector('input[type=radio][name=gender2]:checked');
        console.log("in subitfunc2");
        
        localStorage.setItem("FirstNameP2", firstNamep2.value);
        localStorage.setItem("LastNameP2", lastNamep2.value);
        localStorage.setItem("AgeP2", agep2.value);
        console.log(gender2.value);
        localStorage.setItem("GenderP2", gender2.value);

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