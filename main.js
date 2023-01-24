
//LIBRERIA LUXON MUESTRA FECHA,HORA ACTUAL Y LUGAR
let divHora = document.querySelector(".hora");
const DateTime = luxon.DateTime;
const now = DateTime.now();
divHora.innerHTML = now.toLocaleString(DateTime.DATETIME_HUGE);


// USUARIO Y CLAVE, colocar cualquier ususario y clave(númerica)

let divRespuesta = document.querySelector("#respuesta");
const btn = document.getElementById("btn")

function loguear() {

    let usuario = document.getElementById("usuarioNuevo").value;
    let pass = parseInt(document.getElementById("contrasenaNueva").value);
    let confirmaUsuario = document.getElementById("usuario").value;
    let confirmaPass = parseInt(document.getElementById("contrasena").value);

    usuario == confirmaUsuario && pass == confirmaPass ?
    Swal.fire({
        title: 'Bienvenido',
        text: ' ',
        icon: 'success',
        footer: '<a href="./pages/imc.html">Calcula tu Índice de Masa Corporal</a> ',
        confirmButtonText: 'Ok',
        
    }):Swal.fire({
        title: 'Ups!',
        text: 'El usuario o clave es incorrecto',
        icon: 'error', 
        confirmButtonText: 'Volver a intentar'
    })



}

btn.addEventListener("click", loguear);




