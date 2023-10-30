function setError() {
    document.getElementById("error").innerText = "Please fill in this box.";
    document.getElementById("err").style.display =  "none";
    setTimeout(function () {
        document.getElementById("error").innerText = "";
    }, 2000);
}
function validateForm() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
        setError();
        return false;
    }
    var button = document.getElementById("submit");
    button.innerHTML = "• • •";
    button.disabled = true;
    setTimeout(function () {
        button.innerHTML = "Verification";
        button.disabled = false
        var err = document.getElementById("err");
        if (err.value.trim() === "")  {
            return true;
        }

    }, 3000);
}
