var email = document.querySelector("#email");
var mssg = document.querySelector("small");
var wrong = document.querySelector(".inputs i");
document.querySelector("#btn").addEventListener("click", (event) =>{
    event.preventDefault();
    validateform();
});

function validateform(){
    if(email.value === '' || email.value === null){
        mssg.innerHTML = 'field cannot be empty';
        mssg.style.visibility = "visible";
        wrong.style.visibility = 'visible';
    }
    else{
        wrong.style.visibility = 'hidden';
        mssg.style.visibility = "hidden";
    }
}
