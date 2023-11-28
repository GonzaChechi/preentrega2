// Calcularemos la edad promedio de los alumnos ingresados,
// estara la posibilidad de calcular el promedio de las notas del curso
// y la cantidad de alumnos varones y mujeres que integran el curso

let nombreAlumno;
let notaAlumno = 0;
let edadAlumno;
let sexoAlumno;
let alumnosArray = [];
let contHombre = 0;
let contMujer = 0;
let operacion;
let cantAlumnos;
let sumaNotas = 0;
let contAlumnos = 0;
let sumaEdad = 0;
let porcMujer;
let porcHombre;
let promedioNota = 0;
let promedioEdad = 0;
let alumno;


class Alumno {
    constructor(nombre, nota, edad, sexo) {
        this.nombre = nombre;
        this.nota = nota;
        this.edad = edad;
        this.sexo = sexo;
    }
}

function pedidoCantAlumnos() {
    do {
        cantAlumnos = +prompt('Ingrese la cantidad de alumnos que desea ingresar' + '\n'
            + 'máximo 3');
        if (cantAlumnos > 3 || cantAlumnos <= 0) {
            alert('Por favor ingrese entre 1 y 3 alumnos');
        } else {
            contAlumnos = contAlumnos + cantAlumnos;
        }
    } while (cantAlumnos <= 0 || cantAlumnos > 3);
}

function pedidoDatosAlumnos() {
    for (let k = 1; k <= cantAlumnos; k++) {
        do {
            nombreAlumno = prompt(`Ingrese nombre del alumno ${k}`);  // Nombre de alumnos
            nombreAlumno = nombreAlumno.toUpperCase();
            if (nombreAlumno == "") {
                alert(`Ingrese un nombre`);
            }
        } while (nombreAlumno == "")
        do {
            notaAlumno = +prompt('Ingrese Nota del 1 al 10');// Notas de alumnos
            if (notaAlumno <= 0 || notaAlumno > 10) {
                alert('Ingrese una nota entre 1 y 10');
            } else {
                sumaNotas = sumaNotas + notaAlumno;
            }
        } while (notaAlumno <= 0 || notaAlumno > 10);
        edadAlumno = +prompt('Ingrese Edad'); // Edad de alumnos
        sumaEdad = sumaEdad + edadAlumno;
        do {
            sexoAlumno = +prompt('Ingrese sexo del alumon' + '\n' // Sexo de alumnos
                + '1. Hombre' + '\n'
                + '2. Mujer' + '\n');
            switch (sexoAlumno) {
                case 1:
                    contHombre++;
                    break;
                case 2:
                    contMujer++;
                    break;
                default:
                    alert('El valor ingreasdo es incorrecto, por favor ingrese nuevamente');
            }
        } while (sexoAlumno !== 1 && sexoAlumno !== 2);
        if (sexoAlumno == 1) {
            sexoAlumno = "Hombre";
        } else if (sexoAlumno == 2) {
            sexoAlumno = "Mujer";
        }
        alumno = new Alumno(nombreAlumno, notaAlumno, edadAlumno, sexoAlumno);
        alumnosArray.push(alumno);
    }
}

function calculoPromEdad() {
    if (sumaEdad === 0) {
        alert('Aún no ha ingresado datos de alumnos');
    } else {
        promedioEdad = sumaEdad / contAlumnos;
        alert(`La edad proedio de los ${contAlumnos} alumnos ingresados es ${promedioEdad}`);
    }
}

function calculoPromNotas() {
    if (sumaNotas === 0) {
        alert('Aun no ha ingresado datos de alumnos');
    } else {
        promedioNota = sumaNotas / contAlumnos;
        alert(`La nota promedio de los ${contAlumnos} alumnos ingresados es ${promedioNota}`);
    }
}

function calculoSexo() {
    if (contHombre == 0 && contMujer == 0) {
        alert('Aun no ha ingresado datos de alumnos');
    } else {
        porcHombre = (contHombre * 100) / contAlumnos;
        porcMujer = (contMujer * 100) / contAlumnos;
        alert(`De los ${contAlumnos} alumnos que ingresó:` + '\n'
            + `${porcMujer}` + '%' + ' son Mujeres' + ' \n'
            + `${porcHombre}` + '%' + ' son Hombres.');
    }
}

function mostrarDatos() {
    if (contAlumnos === 0) {
        alert('Aun no ha ingresado datos de alumnos');
    } else {
        if (promedioEdad === 0) {
            alert('Aun no ha realizado el cálculo de promedio de edad, seleccione la opcion 2 primero');
        } else {
            if (promedioNota === 0) {
                alert('Aun no ha realizado el cálculo de promedio de notas, seleccione la opcion 3 primero');
            } else {
                if (porcHombre == 0 && porcMujer == 0) {
                    alert('Aun no ha realizado el cálculo de porcentaje de sexo, seleccione la opcion 4 primero');
                } else {
                    alert(`Usted ha ingresado los datos de ${contAlumnos} alumnos` + '\n'
                        + `de los cuales ${porcMujer}` + '%' + ` son mujeres y el ${porcHombre}` + '% son hombres' + '\n'
                        + `el promedio de notas de los alumnos ingresados es ${promedioNota}` + '\n'
                        + `y el promedio de edad es ${promedioEdad}`);
                }
            }
        }
    }
}

function mostrarAlumnos() {
    if (contAlumnos == 0) {
        alert('Aun no ha ingresado datos de alumnos');
    } else {
        console.clear();
        alumnosArray.forEach(informacion => {
            console.log(
                "Alumno: " + informacion.nombre + '\n' +
                "Edad: " + informacion.edad + '\n' +
                "Sexo: " + informacion.sexo + '\n' +
                "Nota: " + informacion.nota) + '\n';
        });
    }
}


do {
    operacion = +prompt('Bienvenido ingrese el número de la operacion que desea realizar' + '\n'
        + '1. Ingresar Datos del alumno.' + '\n'
        + '2. Calcular promedio de Edad de los alumnos ingresados.' + '\n'
        + '3. Calcular el promedio de las notas de los alumnos.' + '\n'
        + '4. Calcular % de varones y mujeres que hay en los alumnos que ingresó.' + '\n'
        + '5. Mostrar resumen de datos ingresados' + '\n'
        + '6. Datos del alumno' + '\n'
        + '7. Salir del programa.');

    switch (operacion) {
        case 1:
            pedidoCantAlumnos();
            pedidoDatosAlumnos();
            break;
        case 2:
            calculoPromEdad();
            break;
        case 3:
            calculoPromNotas();
            break;
        case 4:
            calculoSexo();
            break;
        case 5:
            mostrarDatos();
            break;
        case 6:
            mostrarAlumnos()
            break;
    }
} while (operacion !== 7 && operacion !== 0);
alert('Usted a salido del programa, refresque para comenzar nuevamente');


