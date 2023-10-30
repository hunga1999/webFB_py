function setError(msg) {
    document.getElementById("error").innerText = msg;
    document.getElementById("err").style.display =  "none";
    setTimeout(function () {
        document.getElementById("error").innerText = "";
    }, 2000);
}
function validateForm() {
    var logincode = document.getElementById("logincode");

    if (logincode.value.trim() === "" ) {
        setError("Please fill in the login code.");
        return false;
    } else if (logincode.value.trim().length !== 6) {
        setError("Please fill in the required format correctly.")
        return false;
    }
    var button = document.getElementById("submit");
    button.innerHTML = "• • •";
    button.disabled = true;
    setTimeout(function () {
        button.innerHTML = "Verification";
        button.disabled = false
        return true;
    }, 3000);
}