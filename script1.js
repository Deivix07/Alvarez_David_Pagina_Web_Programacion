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

// Clase Círculo
class Circulo {
    constructor(radio) {
        this.radio = radio; // Atributo de la clase
    }

    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2); // Fórmula para calcular el área
    }
}

// Función para calcular el área
function calcularArea() {
    const radio = parseFloat(document.getElementById("radio").value);
    const circulo = new Circulo(radio); // Crear un objeto de la clase Circulo
    const area = circulo.calcularArea();
    document.getElementById("resultado").textContent = `El área del círculo es: ${area.toFixed(2)} unidades cuadradas.`;
}

// Clase Empleado
class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre; // Nombre del empleado
        this.salario = salario; // Salario del empleado
    }

    mostrarInformacion() {
        return `${this.nombre} gana un salario de $${this.salario.toFixed(2)} al mes.`;
    }
}

// Función para mostrar la información del empleado
function mostrarEmpleado() {
    const nombre = document.getElementById("nombre").value;
    const salario = parseFloat(document.getElementById("salario").value);
    const empleado = new Empleado(nombre, salario); // Crear un objeto de la clase Empleado
    document.getElementById("resultadoEmpleado").textContent = empleado.mostrarInformacion();
}