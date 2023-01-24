//CALCULADORA IMC
const imcForm = document.querySelector("#imcForm");
let divResultadoImc = document.querySelector("#resultadoImc");
const calcular = document.getElementById("calcular")


function calcularImc() {
    let peso = document.getElementById("peso").value;
    let altura = parseInt(document.getElementById("altura").value);
    let alturaMts = (altura / 100);
    let imc = (peso / Math.pow(alturaMts, 2));
    let calculo = "";


    if (imc <= 18.5) {
        calculo = "Bajo peso";
    } else if (imc > 18.5 && imc < 25) {
        calculo = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        calculo = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        calculo = "Obesidad grado 1";
    } else if (imc >= 35 && imc < 40) {
        calculo = "Obesidad grado 2";
    } else if (imc >= 40) {
        calculo = "Obesidad grado 3";
    }

    let resultado = ` Peso ${peso} kg, altura ${alturaMts} m, su IMC es igual a ${imc.toFixed(1)} y su clasificación es ${calculo}`
    divResultadoImc.innerHTML = resultado + " " + "//<a href='../pages/alumnos.html'>Unite a la comunida Vitality Fitness</a>"

}

calcular.addEventListener("click", calcularImc);