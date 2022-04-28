function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Informe os parâmentros.");

        if (typeof arr !== 'object') throw new TypeError("Array precisa de ser um objeto!");

        if (typeof num !== 'number') throw new TypeError("Array precisa de ser do tipo número!");

        if (arr.length !== num) throw new RangeError("Tamanho inválido!");

        return arr;
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangerError!");
            console.log(e.message);
        } else {
            console.log("Erro desconhecido!")
        }
    }
}

console.log(validaArray([1, 2, 3, 4, 5], 5));