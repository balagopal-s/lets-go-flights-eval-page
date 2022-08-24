var fname = document.getElementById("firstname");
var lname = document.getElementById("lastname");
var age = document.getElementById("age");
var gender = document.getElementById("gender");
var emailID = document.getElementById("email");
var phoneNO = document.getElementById("phone");

var secondfname = document.getElementById("sfname");
var secondsname = document.getElementById("ssname");
var secondage = document.getElementById("sage");
var secondgender = document.getElementById("sgender");


var flightNO = document.getElementById("flightNo");
console.log(flightNO);
var ori = document.getElementById("origin");
var destination = document.getElementById("destination");
var departTime = document.getElementById("departt");
var arriveTime = document.getElementById("arrivet");
var price = document.getElementById("price");

var flightID = localStorage.getItem("FlightID");
var firstname = localStorage.getItem("FirstName");
var lastname = localStorage.getItem("LastName");
var Gender = localStorage.getItem("Gender");
var Age = localStorage.getItem("Age");
var EmailID = localStorage.getItem("EmailID");
var PhoneNo = localStorage.getItem("PhoneNo");

var p2info = document.getElementById("secondpasinfo");

var fnamep2 = localStorage.getItem("FirstNameP2");
var snamep2 = localStorage.getItem("LastNameP2");
var agep2 = localStorage.getItem("AgeP2");
var genderp2 = localStorage.getItem("GenderP2");

fname.innerHTML = firstname;
lname.innerHTML = lastname;
age.innerHTML = "Age : " + Age;
gender.innerHTML = Gender;
emailID.innerHTML = EmailID;
phoneNO.innerHTML = "Phone : +91 " + PhoneNo;

secondfname.innerHTML = fnamep2;
secondsname.innerHTML = snamep2;
secondage.innerHTML = agep2;
secondgender.innerHTML = genderp2;

// p2info.innerHTML += `<h1>+</h1><div class="spname"><h2>${fnamep2}</h2><h2>${snamep2}</h2></div><h3>${agep2}</h3><h3>${genderp2}</h3>`;

fetch('flights.json')
.then(response => {return response.json();})
.then(data => {
buildFlightDetails(data);
 
 function buildFlightDetails(details) {

 let flightObj = details.find(el => el.flightNum === flightID);
 console.log(flightObj);
 const departT = new Date(flightObj.departTime)
 const arriveT = new Date(flightObj.ArrivalTime)

 flightNO.innerHTML = flightObj.flightNum;
 ori.innerHTML = flightObj.origin;
 destination.innerHTML = flightObj.destination;
 departTime.innerHTML = departT.toUTCString();
 arriveTime.innerHTML = arriveT.toUTCString();
 price.innerHTML = "&#8377 " + flightObj.price + "/-";
 if(flag==1) {
    price.innerHTML= "&#8377 " + flightObj.price*2 + "/-";
 }
}

});

    
    var flag = localStorage.getItem("pass2exist");
    console.log("checkpass is called, flag value = " + flag);
    
    if (flag=="0"){
        p2info.style.display = "none";
    }
    
    else {
        p2info.style.display = "block";
    }



function clearls(){
    localStorage.clear();
}






