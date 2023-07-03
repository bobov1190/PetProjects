let alertBox = document.querySelector(".alertBox")

function getPassword() {
    let chars = "0123456789abcdefghigklmnopqrstuvwxtz!@#$%^&*()_++_)(*?:%;№";
    let passwordLength = 16;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber,randomNumber+1);
    }
    document.querySelector(".password").value = password;
    alertBox.innerHTML = "New Password <br>" + password;
}


function copyPassword() {
    let copyPassText = document.querySelector(".password");
    copyPassText.select();
    copyPassText.setSelectionRange(0,9999);
    document.execCommand("copy");
    alertBox.classList.toggle('active');

    setTimeout(function() {
        alertBox.classList.toggle('active');
    },2000)
}