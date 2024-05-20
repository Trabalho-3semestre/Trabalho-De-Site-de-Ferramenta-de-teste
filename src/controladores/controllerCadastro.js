let i = 5
const btnConcluir = document.getElementById('btnConcluir')
export let registros = [{
    iden:1,
    nome:"Kauan",
    email:"Kauan@gmail.com",
    senha:"Kauan123"
},{
    iden:2,
    nome:"Anxon123",
    email:"Anxon@gmail.com",
    senha:"Anxoni123"
},{
    iden:3,
    nome:"Felipe123",
    email:"Felipe@gmail.com",
    senha:"Felipe123"
},{
    iden:4,
    nome:"Lucas123",
    email:"Joao@gmail.com",
    senha:"joao123"
},{
    iden:5,
    nome:"Nonofi",
    email:"Nono@gmail.com",
    senha:"nono123"
}]
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



export const acao = btnConcluir.addEventListener('click', async function(event) {
    i++
    event.preventDefault(); 
    
    const nome = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const pessoa = {
        iden:i,
        nome,
        email,
        senha
    }
    registros.push(pessoa)
    console.log(registros)
    
});