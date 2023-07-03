function validate() {
    let userName = document.querySelector('#userName')
    let userPassword = document.querySelector('#userPassword')

    event.preventDefault();
    
    if(!userName.value) {
        userName.style.border = "2px solid red";
        return false;
    }
    if(!userPassword.value) {
        userPassword.style.border = "2px solid red";
        return false;
    }

    return true;
}