const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const secondname = document.getElementById('secondname');
const age = document.getElementById('age');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const male = document.getElementById('male');
const female = document.getElementById('female');
const others = document.getElementById('others');

//show error fucntion
function showError(input, message){
     
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}

//event listener
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('clicked');

    if(firstname.value === '') {
        showError(username, 'firstname is required');
    }
    
    if(secondname.value === '') {
        showError(username, 'secondname is required');
    }


});