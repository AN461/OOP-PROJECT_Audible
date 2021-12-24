var form = document.querySelector("form");
var email = document.getElementById("e-mail");
var password = document.getElementById("pass-word");

document.getElementById("btn").addEventListener("click", (event) =>{
    event.preventDefault();
    validateForm();
    checkdata();
});

function validateForm(){
    if(email.value.trim() === '' || email.value.trim() === null){
        setError(email, 'field cannot be empty');
    }
    else{
        setSuccess(email);
    }
    if(password.value.trim() === '' || password.value.trim() === null){
        setError(password, 'field cannot be empty');
    }
    else{
        setSuccess(password);
    }
}

function setError(element, errormessage){
    var parent = element.parentElement;
    var paragraph = parent.querySelector("small");
    paragraph.style.visibility = "visible";
    if(parent.querySelector(".fa-check-circle").style.visibility === "visible"){
        parent.querySelector(".fa-check-circle").style.visibility = "hidden";
    }
    parent.querySelector(".fa-exclamation-circle").style.visibility = "visible";
    paragraph.textContent = errormessage;
}

function setSuccess(element){
    var parent = element.parentElement;
    var paragraph = parent.querySelector("small");
    if(paragraph.style.visibility === "visible"){
        paragraph.style.visibility = "hidden";
    }
    if(parent.querySelector(".fa-exclamation-circle").style.visibility === "visible"){
        parent.querySelector(".fa-exclamation-circle").style.visibility = "hidden";
    }
    // parent.querySelector(".fa-check-circle").style.visibility = "visible";
}

var alien = [
    {
        email: "anilkoduru27@gmail.com",
        password: "Anil1273"
    },
    {
        email: "anilkoduru20@gmail.com",
        password: "Anil@1273"
    }
]
alien.push(
    {
        email: "anukoduru20@gmail.com",
        password: "anu1234"
    }
)

function checkdata(){
    var i;
    for(i=0;i<alien.length;i++){
        if(email.value === alien[i].email && password.value === alien[i].password){
            alert(email+"succesfully logged in");
        }
        else if(email.value === alien[i].email && password.value == ''){
            alert("Enter your password");
        }
        else if(email.value === alien[i].email && password.value !== alien[i].password){
            alert("invalid password");
        }
    }
}

var eye = document.querySelector(".fa-eye");
var slasheye = document.querySelector(".fa-eye-slash");

eye.addEventListener("click", function(){
    if(eye.style.visibility == "visible"){
        eye.style.visibility = 'hidden';   
    }
    slasheye.style.visibility = 'visible';
    password.type = 'text';
});
slasheye.addEventListener("click", function(){
    if(slasheye.style.visibility == "visible"){
        slasheye.style.visibility = 'hidden';   
    }
    eye.style.visibility = 'visible';
    password.type = 'password';
});
