console.log("This is project 4");

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone= document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validName = false;
$('#success').hide();
$('#failure').hide();
// console.log(name,email,phone);

name.addEventListener('blur' , ()=>{
    console.log('Name is blured');
    //validate name here

    let reg = /^[a-zA-Z]([0-9a-zA-z]){2,10}$/;
    let str = name.value;
    console.log(reg , str);
    if(reg.test(str)) {
        console.log("your name is valid");
        name.classList.remove('is-invalid');
        validName = true;
    }
    else {
        console.log("Your name is not valid");
        name.classList.add('is-invalid');
        validName = false;
    }


});

phone.addEventListener('blur' , ()=>{
    console.log('Phone is blured');
    //validate phone here
    let reg = /^([0-9]){10}/;
    let str = phone.value;
    console.log(reg , str);
    if(reg.test(str)) {
        console.log("It Matched");
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log("NO Match");
        phone.classList.add('is-invalid');
        validPhone = false;
    }

});

email.addEventListener('blur' , ()=>{
    console.log('Email is blured');
    //validate Email here
    
    let reg = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(reg , str);
    if(reg.test(str)) {
        console.log("your name is valid");
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log("Your name is not valid");
        email.classList.add('is-invalid');
        validEmail = false;
    }
});

let submit = document.getElementById('submit');
submit.addEventListener('click' ,(e)=>{
    e.preventDefault();

    console.log("You clicked on submit");
  
    //submit your form here
    if(validEmail&& validName&& validPhone) {
        let failure = document.getElementById('failure');

        console.log('phone,email and user are valid.Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        $('#failure').hide();
        $('#success').show();

    }
    else {
        console.log('One of the phone,email or user is not valid.Please try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        $('#failure').show();
        $('#success').hide();
    }
   
})