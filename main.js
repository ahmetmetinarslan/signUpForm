const claimBtn = document.getElementById("claimBtn"),
firstName = document.getElementById("firstName"),
lastName = document.getElementById("lastName"),
emailInput = document.getElementById("emailInput"),
passwordInput = document.getElementById("passwordInput"),
firstErrMsg = document.getElementById("firstErrMsg"),
lastErrMsg = document.getElementById("lastErrMsg"),
emailErrMsg = document.getElementById("emailErrMsg");
passwordErrMsg = document.getElementById("passwordErrMsg"),
firstErrIcon = document.getElementById("firstErrIcon"),
lastErrIcon = document.getElementById("lastErrIcon"),
emailErrIcon = document.getElementById("emailErrIcon"),
passErrIcon = document.getElementById("passErrIcon"),
successMsg = document.getElementById("successMsg");
formInput = document.getElementById("formInput");



claimBtn.addEventListener("click", errMsg);
claimBtn.addEventListener("click", inputBorderColor);
claimBtn.addEventListener("click", addErrIcon);
claimBtn.addEventListener("click", addSuccessMsg);

function errMsg(event) {
    event.preventDefault(); // Event parametre olarak verilir. Tıklama işlemi sonrası sayfa yenilenmez. 
    if(firstName.value.length <= 0) {
        firstErrMsg.innerHTML = "First Name Cannot be empty";
    }
    if(lastName.value.length <= 0) {
        lastErrMsg.innerHTML = "Last Name Cannot be empty";
    } else {
        lastErrMsg.innerHTML = "";
    }
    if(emailInput.value.length <= 0) {
        emailErrMsg.innerHTML = "Email Cannot be empty";
    } else {
        emailErrMsg.innerHTML = "";
    }
    if(passwordInput.value.length <= 0) {
        passwordErrMsg.innerHTML = "Password Cannot be empty";
    } else {
        passwordErrMsg.innerHTML = "";
        addSuccessMsg();
    }
}

function inputBorderColor() {
    if(firstName.value.length <= 0) {
        firstName.style.borderColor = "red";
    }
    if(lastName.value.length <= 0) {
        lastName.style.borderColor = "red";
    }
    if(emailInput.value.length <= 0) {
        emailInput.style.borderColor = "red";
    }
    if(passwordInput.value.length <= 0) {
        passwordInput.style.borderColor = "red";
    }
}

function addErrIcon() {
    if(window.innerWidth >= 1900 ) {
        firstErrIcon.style.display = "inline";
        lastErrIcon.style.display = "inline";
        emailErrIcon.style.display = "inline";
        passErrIcon.style.display = "inline";
    } else {
        firstErrIcon.style.display = "none";
        lastErrIcon.style.display = "none";
        emailErrIcon.style.display = "none";
        passErrIcon.style.display = "none";
    }
    if(firstErrMsg.innerHTML.length > 0 || lastErrMsg.innerHTML.length > 0) {
        firstErrIcon.style.display = "none";
        lastErrIcon.style.display = "none";
        emailErrIcon.style.display = "none";
        passErrIcon.style.display = "none";
    }
    if(firstName.value.length > 0 || lastName.value.length > 0 || emailInput.value.length > 0 || passwordInput.value.length > 0) {
        firstErrIcon.style.display = "none";
        lastErrIcon.style.display = "none";
        emailErrIcon.style.display = "none";
        passErrIcon.style.display = "none";
    }
}

function addSuccessMsg() {
    if(firstName.value.length > 0 && lastName.value.length > 0 && emailInput.value.length > 0 && passwordInput.value.length > 0 ) {
        successMsg.innerHTML = "<i>Success! Please check your email</i>";
    }
      
    if(successMsg.innerHTML.length > 0 ) {
        firstErrIcon.style.display = "none";
        lastErrIcon.style.display = "none";
        emailErrIcon.style.display = "none";
        passErrIcon.style.display = "none";
        firstName.style.borderColor = "";
        lastName.style.borderColor = "";
        emailInput.style.borderColor = "";
        passwordInput.style.borderColor = "";
        var inputElements = document.getElementsByTagName("input");
        for (var i = 0; i < inputElements.length; i++) {
        inputElements[i].value = "";
        location.reload();
    }
    }
}





