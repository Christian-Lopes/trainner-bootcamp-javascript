var fullSoma = 0;

function soma(){

    var n1 = parseInt(document.getElementById("campo1").value);
    var n2 = parseInt(document.getElementById("campo2").value);

    if(!isNaN(n1) && !isNaN(n2)){
        var soma = n1 + n2;
        fullSoma = fullSoma + soma;
        lb01.innerHTML = "Soma é igual: " + soma;
    
        var linha = document.createElement("tr");
        linha.innerHTML = "<td>" + n1 +"</td><td>" + n2 + "</td><td>" + soma + "</td>";
        document.getElementById("table-tbody").appendChild(linha);
    
        document.getElementById("table-tfoot").innerHTML = "Total soma: " + fullSoma;
    }
}

