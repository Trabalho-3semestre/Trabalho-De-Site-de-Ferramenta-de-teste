// function cadastrarUsuario() {
//     var usuario = document.getElementById("usuario").value;
//     var email = document.getElementById("email").value;
//     var senha = document.getElementById("senha").value;

//     // Deixar disponivel apenas quando tiver todos completos
//     // Verificar se a senha é forte, media ou fraca de forma simples, caracter especial, numero, quantidade de letras.
//     // Mudar o style qundo tiver algum erro de validação

//     if(usuario === "" ){
//         document.getElementById("usuario").style.borderColor = "red";
//         return false;
//     }
//     if(email === ""){
//         document.getElementById("email").style.borderColor = "red";
//         return false;
//     }
//     if(senha === "") {
//         document.getElementById("senha").style.borderColor = "red";
//         return false;
//     }

//     console.log("Usuário cadastrado com sucesso!");
// }

document.getElementById("usuario").addEventListener("blur", function() {
    var usuario = document.getElementById("usuario").value;

    if(usuario === "" ) {
        document.getElementById("usuario").style.outline = "2px solid red";
        return false;
    }else{
        document.getElementById("usuario").style.outline = "2px solid green";
    }
});

document.getElementById("email").addEventListener("blur", function() {
    var email = document.getElementById("email").value;

    if(email === "" ) {
        document.getElementById("email").style.outline = "2px solid red";
        return false;
    }else{
        document.getElementById("email").style.outline = "2px solid green";
    }
});

document.getElementById("senha").addEventListener("blur", function() {
    var senha = document.getElementById("senha").value;

    if(senha === "" ) {
        document.getElementById("senha").style.outline = "2px solid red";
        return false;
    }else{
        document.getElementById("senha").style.outline = "2px solid green";
    }
});