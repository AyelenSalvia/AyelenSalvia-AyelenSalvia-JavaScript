// USUARIO Y CLAVE

let divRespuesta = document.querySelector("#respuesta");


function loguear (){

    let usuario =document.getElementById("usuarioNuevo").value;  
    let pass = parseInt( document.getElementById("contrasenaNueva").value);
    let confirmaUsuario = document.getElementById("usuario").value;
    let confirmaPass = parseInt( document.getElementById("contrasena").value);

    if (usuario == confirmaUsuario && pass == confirmaPass) {
        divRespuesta.innerHTML = "Felicitaciones, ya podes calcular tu Índice de Masa Corporal <a href='./pages/imc.html'>Clickea acá</a>";


            
            }
    else {
        alert(" El usuario o la clave es incorecto, volvé a intentarlo")
    }
}



//CALCULADORA IMC
const imcForm = document.querySelector("#imcForm")

let divResultadoImc = document.querySelector("#resultadoImc");

function calcularImc () {
let peso = document.getElementById("peso").value;
let altura = parseInt( document.getElementById("altura").value);
let alturaMts= (altura / 100);
let imc = (peso / Math.pow(alturaMts,2));
let calculo= "";


if (imc <= 18.5){
    calculo = "Bajo peso";
}else if (imc > 18.5 && imc < 25){
    calculo = "Peso normal";
}else if (imc >=25 && imc < 30){
    calculo ="Sobrepeso";
}else if (imc >=30 && imc < 35){
    calculo = "Obesidad grado 1";
}else if (imc >=35 && imc < 40){
    calculo = "Obesidad grado 2";
}else if (imc >= 40 ) {
    calculo =  "Obesidad grado 3";
}

let resultado =  ` Peso ${peso} kg, altura ${alturaMts} m, su IMC es igual a ${imc.toFixed(1)} y su clasificación es ${calculo}`
divResultadoImc.innerHTML = resultado +" "+  "//<a href='../pages/alumnos.html'>Unite a la comunida Vitality Fitness</a>"

}




//AGREGAR ALUMNOS

const formulario = document.querySelector("#formulario");
class Alumno {
    constructor(nombreApellido , imc, horasSueno,tiempoActFisica){
        this.nombre= nombreApellido;
        this.imc=imc;
        this.horasSueno=horasSueno;
        this.tiempoActFisica=tiempoActFisica;
    }
}


let divAlumnos = document.querySelector("#alumnos");

const listaAlumnos = [
    {nombre: `Ana María`, imc: 30, horasSueno:8, tiempoActFisica: 1},
    {nombre: `Uriel`, imc: 23, horasSueno:7, tiempoActFisica: 3},
    {nombre: `Nahuel`, imc: 21.5, horasSueno:8, tiempoActFisica: 2},
    {nombre: `Alexis`, imc: 31, horasSueno:6, tiempoActFisica: 2},
    {nombre: `Dario`, imc: 24, horasSueno:8, tiempoActFisica: 4},
    {nombre: `Liliana`, imc: 22, horasSueno:7, tiempoActFisica: 1},
    {nombre: `Cecilia`, imc: 32, horasSueno:8, tiempoActFisica: 2},
    {nombre: `Jacinto`, imc: 23.5, horasSueno:6, tiempoActFisica: 3},
];





const agregarAlumno=()=> {
    let nombre= document.getElementById("nombre").value;
    let imc = parseInt( document.getElementById("imcCalculado").value);
    let horasSueno = parseInt( document.getElementById("sueno").value);
    let tiempoActFisica= parseInt( document.getElementById("actividadF").value);

    let alumnoNuevo = new Alumno (nombre, imc, horasSueno, tiempoActFisica);


let listaStorage = JSON.parse(localStorage.getItem("alumnos"));
listaStorage.push(alumnoNuevo);
localStorage.setItem("alumnos", JSON.stringify (listaStorage));

return listaAlumnos;

}

formulario.onsubmit = (e)=> { 
    e.preventDefault();
    agregarAlumno()
}



const mostrarAlumnos = ()=> {
    const alumnosGuardados = JSON.parse(localStorage.getItem("alumnos"));

    alumnosGuardados.forEach(alumno => {
        divAlumnos.innerHTML += `
                        <div class="alumno">
                            <h4>Nombre del alumno: ${alumno.nombre}</h4>
                            <h4>IMC:${alumno.imc}</h4>
                            <h4>Horas de sueño: ${alumno.horasSueno}</h4>
                            <h4>Horas de actividad fisica por día: ${alumno.tiempoActFisica}</h4>
                        </div>
                        `
    })
}





