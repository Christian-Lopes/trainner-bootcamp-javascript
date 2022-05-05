/* 
 * @autor: Christian Lopes de Oliveira
 * @objtivo: Estudos de functions JS
 * @date: 05/05/2022
 */

//Array para primeira function
const alunos = [{
    nome: 'Christian',
    nota: 5,
    turma: '1B',
},
{
    nome: 'Gabriel',
    nota: 9,
    turma: '1B',
},
{
    nome: 'Railana',
    nota: 6,
    turma: '2B',
},
{
    nome: 'Fernanda',
    nota: 3,
    turma: '2B',
},
];

//Primeiro function: analise de média de alunos
function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const { nome, nota } = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));

//dados para o segundo teste com function
const pessoa1 = {
    nome: "Maria",
    idade: 30
};
const pessoa2 = {
    nome: "Fernando",
    idade: 65
};
const animal = {
    nome: "Amora",
    idade: 4,
    raca: "pug"
};

//function que verifica a idade conforme o tempo a ser somado a idade
function calcularIdade(anos) {
    let mensagem;
    mensagem = `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos
        } anos de idade.`;
    return mensagem;
}

//function com CALL()
console.log(calcularIdade.call(pessoa1, 15));

//function com APPLY
console.log(calcularIdade.apply(animal, [3]));