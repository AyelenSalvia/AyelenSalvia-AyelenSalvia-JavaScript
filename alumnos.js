// AGREGAR ALUMNOS 

const formulario = document.querySelector("#formulario");
class Alumno {
    constructor(nombreApellido, imc, horasSueno, tiempoActFisica) {
        this.nombre = nombreApellido;
        this.imc = imc;
        this.horasSueno = horasSueno;
        this.tiempoActFisica = tiempoActFisica;
    }
}


let divAlumnos = document.querySelector("#alumnos");

const listaAlumnos = JSON.parse(localStorage.getItem("alumnos")) || [];




const agregarAlumno = () => {
    let nombre = document.getElementById("nombre").value;
    let imc = parseFloat(document.getElementById("imcCalculado").value);
    let horasSueno = parseInt(document.getElementById("sueno").value);
    let tiempoActFisica = parseInt(document.getElementById("actividadF").value);

    let alumnoNuevo = new Alumno(nombre, imc, horasSueno, tiempoActFisica);

    listaAlumnos.push(alumnoNuevo);
    localStorage.setItem("alumnos", JSON.stringify(listaAlumnos));

    return listaAlumnos;

}

formulario.onsubmit = (e) => {
    e.preventDefault();
    agregarAlumno();
}


const pintar = document.getElementById("pintar")


const mostrarAlumnos = () => {
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

pintar.addEventListener("click", mostrarAlumnos);


//MOSTRAR EJERCICIOS Y MÚSCULOS QUE EJRCITAN CADA UNO (tuve que abrirlo con live server, porque sino el CORS no me lo permitia)

const boton = document.getElementById("btnEj");
const contenedor = document.querySelector("#ejercicios");

const obtenerEj = () => {
    fetch("../ejercicios.json")
        .then(response => response.json())
        .then(resultado => {
            resultado.forEach(item => {
                contenedor.innerHTML += `
                    <div>
                        <h3>Ejercicio:${item.ej}</h3>
                        <p>Músculo principal: ${item.musc}</p>
                        
                    </div>
                `
            })
        })
}

boton.onclick = () => {
    obtenerEj();
}

