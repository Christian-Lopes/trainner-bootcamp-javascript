let idade = 33;
let nome = "Christian";
let peso = 75.30;
let maiorIdade = true;
let sobreNome = "Lopes";

let pessoa = {
    nome : "Christian",
    peso : 75.30,
    idade : 33,
    maiorIdade : true
}

let user = ["Chritian", 33, 75.30, true];

let cor = "Verde";

function resetColor(mudarCor){
    cor = mudarCor;
}

function fullName(){
    console.log(nome + ' ' + sobreNome);
}

console.log(idade);
console.log(pessoa);
console.log(user);
console.log(cor);
resetColor("Azul");
console.log(cor);
fullName();
let condicaoIdade = idade >=18 ? "Maioridade" : "Menoridade";
console.log(condicaoIdade);

