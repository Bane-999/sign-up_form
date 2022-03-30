function passMatch() {
    if(document.getElementById("Password").value == document.getElementById("Confirm_Password").value) {
        document.getElementById("Confirm_Password").setCustomValidity("");
        document.getElementById("dont_match").style.color = "green";
        document.getElementById("dont_match").innerHTML = "*Passwords matching";
    }
    else {
        document.getElementById("Confirm_Password").setCustomValidity("Invalid field.");
        document.getElementById("dont_match").style.color = "red";
        document.getElementById("dont_match").innerHTML = "*Passwords do not match";
    }   
}
