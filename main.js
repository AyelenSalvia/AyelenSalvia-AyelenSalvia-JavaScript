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

//AGREGAR ALUMNOS
class Alumno {
    constructor(nombreApellido , imc, horasSueno,tiempoActFisica){
        this.nombre= nombreApellido;
        this.imc=imc;
        this.horasSueno=horasSueno;
        this.tiempoActFisica=tiempoActFisica;
    }
}


const listaAlumnos =[
    {nombre: `Ana María`, imc: 30, horasSueno:8, tiempoActFisica: 1},
    {nombre: `Uriel`, imc: 23, horasSueno:7, tiempoActFisica: 3},
    {nombre: `Nahuel`, imc: 21.5, horasSueno:8, tiempoActFisica: 2},
    {nombre: `Alexis`, imc: 31, horasSueno:6, tiempoActFisica: 2},
    {nombre: `Dario`, imc: 24, horasSueno:8, tiempoActFisica: 4},
    {nombre: `Liliana`, imc: 22, horasSueno:7, tiempoActFisica: 1},
    {nombre: `Cecilia`, imc: 32, horasSueno:8, tiempoActFisica: 2},
    {nombre: `Jacinto`, imc: 23.5, horasSueno:6, tiempoActFisica: 3},
    
    
];

const agregarAlumnos=()=> {
    let nombre= prompt("Ingresa tu Nombre y apellido");
    let imc = parseFloat(prompt("Cuál es tu IMC actual?"));
    let horasSueno = parseFloat(prompt("Cuántas horas dormis generalmente?"));
    let tiempoActFisica=parseFloat(prompt("Cuántas horas de actividad física haces habitualmente por día?"));

    let alumnoNuevo = new Alumno (nombre, imc, horasSueno, tiempoActFisica)


listaAlumnos.push (alumnoNuevo);
return listaAlumnos;
}

//FILTRAR ALUMNOS CON SOBREPESO SEGUN IMC

console.log(listaAlumnos.filter(alumno => alumno.imc >=30 && imc < 35
));

