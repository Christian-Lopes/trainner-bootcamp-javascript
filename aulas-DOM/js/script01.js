//Primeiro teste com parágrafo
document.getElementById("demo").innerHTML = "Pimeiro teste!";

//Segundo testes com diferentes referências
const elemento = document.getElementById("demo2");

const p1 = document.getElementsByClassName("p1")[0].innerHTML = 
            "Teste recebendo por classe: " + elemento.innerHTML;

const p = document.getElementsByTagName("p");
p[3].style.color = "white";
console.log(p);

//Função do formulário
function nome(){
    const firstName = document.forms["frm1"]["lname"].value;
    const lastName = document.forms["frm1"]["fname"].value;

    const fullName = lastName + " " + firstName;
    alert("Seu nome é " + fullName);
    document.getElementById("nome").innerHTML = fullName;
}

document.getElementById("data").innerHTML = "Data: " + Date();

//Função validar formulário 2
function validarForm(){
    let nome = document.forms["validar"]["fname"].value;

    if(nome == ""){
        alert("Por favor informe o seu nome!");
        return false;
    }
}

//Função para validar número de 1 até 10
function validarNumero(){
    let numero = document.getElementById("number").value;
    let informar;

    if(isNaN(numero) || numero < 1 || numero > 10){
        numero = parseInt(numero);
        if(numero !== "number"){
            informar = "Informação Inválida!";
        } 
    }else{
        informar = "Infomação válida!";
    }

    document.getElementById("numero").innerHTML = informar;
}

//Section CSS DOM
//mudar cor do elemento
function mudarCor(){
    document.getElementById("cor").style.color = "Red";
}
