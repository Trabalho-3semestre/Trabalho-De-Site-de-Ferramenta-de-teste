document.getElementById("email").addEventListener("blur", function() {
    var email = document.getElementById("email").value;

    if(email === "" ) {
        document.getElementById("email").style.outline = "2px solid red";
        return false;
    }else{
        document.getElementById("email").style.outline = "2px solid green";
    }
});2
document.getElementById("senha").addEventListener("blur", function() {
    var senha = document.getElementById("senha").value;

    if(senha === "" ) {
        document.getElementById("senha").style.outline = "2px solid red";
        return false;
    }else{
        document.getElementById("senha").style.outline = "2px solid green";
    }
});