/* @autor: Christian Lopes de Oliveira
 * @objetico: Colocar em prática o conhecimento de functions em 
 * Javascript, HTML, CSS e DOM.
 * @date: 05/05/2022
*/

//Soma de dois números
function soma(){
    const n1 = parseInt(document.getElementById("n1").value);
    const n2 = parseInt(document.getElementById("n2").value);
   
    const soma = n1 + n2;
    return document.getElementById("soma").innerHTML = "Resultado: " + soma;    
} 