// USUARIO Y CLAVE

let usuario =prompt("Creá tu usuario");
let pass = parseInt(prompt("Creá una clave de 6 números "));
let confirmaUsuario = prompt ("Ingresá tu usuario");
let confirmaPass = parseInt(prompt("Ingresá tu clave"));


while(usuario != confirmaUsuario || pass != confirmaPass  ) {
    alert(" El usuario o la clave es incorecto, volvé a intentarlo");
    confirmaUsuario = prompt ("Cuál es tu usuario?");
    confirmaPass = parseInt(prompt("Cuál es tu clave?"));
    
}

if (usuario == confirmaUsuario && pass == confirmaPass) {
    alert("Felicitaciones, ya podes calcular tu Índice de Masa Corporal ")
    }

let peso = parseFloat(prompt("Cuál es tu peso en kg?"))
let altura = parseFloat(prompt("Cuál es tu altura en cm?"))
let alturaMts= (altura / 100)
let imc = (peso / Math.pow(alturaMts,2))
let resultado = imc.toFixed(1)

//ÍNDICE DE MASA CORPORAL

if (imc <= 18.5){
    alert(` Peso ${peso} kg, altura ${alturaMts} m, su IMC es igual a ${resultado}= Bajo peso`);
}else if (resultado > 18.5 && resultado < 25){
    alert(` Peso ${peso} kg, altura ${alturaMts} m, su IMC es igual a ${resultado}= Peso normal`);
}else if (imc >=25 && imc < 30){
    alert(` Peso ${peso} kg, altura ${alturaMts} m, su IMC es igual a ${resultado}= Sobrepeso`);
}else if (imc >=30 && imc < 35){
    alert(` Peso ${peso} kg, altura ${alturaMts }m, su IMC es igual a ${resultado }= Obesidad grado 1 `);
}else if (imc >=35 && imc < 40){
    alert(` Peso ${peso} kg, altura ${alturaMts} m, su IMC es igual a ${resultado}= Obesidad grado 2`);
}else if (imc >= 40 ) {
    alert(` Peso ${peso} kg, altura ${altura} m, su IMC es igual a ${resultado}= Obesidad grado 3`);
}