var password = document.getElementById("new-password");
var confirmpassword = document.getElementById("confirm-password");
var button = document.getElementById("btn");

button.addEventListener("click" , (event)=>{
    event.preventDefault();
    validateform();
});

function validateform(){
    if(password.value === '' || password.value === null){
        seterror(password, 'field cannot be empty');
    }
    else{
        setsuccess(password);
    }
    if(confirmpassword.value === '' || confirmpassword.value === null){
        seterror(confirmpassword, 'feild cannot be empty');
    }
    else{
        setsuccess(confirmpassword);
    }
}

function seterror(element,message){
    var parent = element.parentElement;
    var paragraph = parent.querySelector("small");
    paragraph.style.visibility = "visible";
    parent.querySelector(".fa-exclamation-circle").style.visibility = "visible";
    paragraph.textContent = message;
}

function setsuccess(element){
    var parent = element.parentElement;
    var paragraph = parent.querySelector("small");
    if(paragraph.style.visibility === "visible"){
        paragraph.style.visibility = "hidden";
    }
    if(parent.querySelector(".fa-exclamation-circle").style.visibility === "visible"){
        parent.querySelector(".fa-exclamation-circle").style.visibility = "hidden";
    }
}