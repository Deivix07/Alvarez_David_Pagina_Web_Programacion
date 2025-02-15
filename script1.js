function verificarNumero() {
    let num = parseFloat(document.getElementById("numeroInput").value);
    let resultado = "";

    if (num > 0) {
        resultado = "El número es positivo.";
    } else if (num < 0) {
        resultado = "El número es negativo.";
    } else {
        resultado = "El número es cero.";
    }

    document.getElementById("resultado1").innerText = resultado;
}

function mostrarFizzBuzz() {
    let resultado = "";
    
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultado += "FizzBuzz, ";
        } else if (i % 3 === 0) {
            resultado += "Fizz, ";
        } else if (i % 5 === 0) {
            resultado += "Buzz, ";
        } else {
            resultado += i + ", ";
        }
    }

    document.getElementById("resultado2").innerText = resultado.slice(0, -2);
}