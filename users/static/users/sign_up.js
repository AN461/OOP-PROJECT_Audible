var form = document.getElementById("form");
var username = document.getElementById("user-name");
var email = document.getElementById("e-mail");
var password = document.getElementById("pass-word");
var confirmpassword = document.getElementById("confirm-password");

document.getElementById("btn").addEventListener("click" ,(event) =>{
    validate();
    if(checkform() == true){
        form.submit(); 
    }
    else{
        event.preventDefault();
    }
});

function checkform(){
    let result = true;
    var inputfields = form.querySelectorAll(".inputs");
    var n = inputfields.length;
    for(var i = 0; i<n ;i++){
        if(inputfields[i].querySelector(".fa-exclamation-circle").style.visibility === "visible"){
            result = false;
        }
    }
    return result;
}


function validate(){
    if(username.value === '' || username.value === null){
        seterror(username,'Field cannot be empty');
    }
    else if(username.value.length <5 || username.value.length >18){
        seterror(username,'Username must be min 5 and max 18 characters')
    }
    else{
        setsuccess(username);
    }
    if(email.value === '' || email.value === null){
        seterror(email,'Field cannot be empty');
    }
    else{
        setsuccess(email);
    }
    if(password.value === '' || password.value === null){
        seterror(password,'Field cannot be empty');
    }
    else if(password.value.length < 6){
        seterror(password,'Password must be greater than 6 characters');
    }
    else{
        setsuccess(password);
    }
    if(confirmpassword.value === '' || confirmpassword.value === null){
        seterror(confirmpassword,"Field cannot be empty");
    }
    else{
        setsuccess(confirmpassword);
    }
    if(confirmpassword.value != password.value){
        alert("passwords not matched");
    }
}

function seterror(element,message){
    element.style.borderColor = "red";
    var parent = element.parentElement;
    var paragraph = parent.querySelector("small");
    paragraph.style.visibility = "visible";
    parent.querySelector(".fa-exclamation-circle").style.visibility = "visible";
    paragraph.textContent = message;
}

function setsuccess(element){
    var parent = element.parentElement;
    var paragraph = parent.querySelector("small");
    if(element.style.borderColor == "red"){
        element.style.borderColor = "lightgray";
    }
    if(paragraph.style.visibility === "visible"){
        paragraph.style.visibility = "hidden";
    }
    if(parent.querySelector(".fa-exclamation-circle").style.visibility === "visible"){
        parent.querySelector(".fa-exclamation-circle").style.visibility = "hidden";
    }
}