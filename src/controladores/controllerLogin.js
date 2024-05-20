import { registros } from "./controllerCadastro.js";

const btn = document.getElementById('btnConcluir')

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

btn.addEventListener('submit',(ev) =>{
    ev.preventDefault()
    const senha = document.getElementById('senha')
    const nome = document.getElementById('email')
    const verificar = registros.filter((a) =>{
        a.email == nome
    })
    const verificarSenha = registros.filter((a) =>{
        a.senha == senha
    })
    if(verificar.length > 0 && verificarSenha.length > 0){
        
    }else{
        alert("Não foi Possivel Loga")
    }
})

