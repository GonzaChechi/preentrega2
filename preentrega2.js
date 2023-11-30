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
let sumaNotas = 0;
let contAlumnos = 0;
let sumaEdad = 0;
let porcMujer;
let porcHombre;
let promedioNota = 0;
let promedioEdad = 0;
let alumno;
let nAlumno;


class Alumno {
    constructor(nombre, nota, edad, sexo) {
        this.nombre = nombre;
        this.nota = nota;
        this.edad = edad;
        this.sexo = sexo;
    }
}

//!-----------------------Funciona para pedir la cantidad de alumnos a ingresar--------------------
function pedidoCantAlumnos() {
    let cantAlumnos

    do {
        cantAlumnos = +prompt('Ingrese la cantidad de alumnos que desea ingresar' + '\n'
            + 'máximo 3');
        if (cantAlumnos > 3 || cantAlumnos <= 0) {
            alert('Por favor ingrese entre 1 y 3 alumnos');
        } else {
            contAlumnos = contAlumnos + cantAlumnos;
        }
    } while (cantAlumnos <= 0 || cantAlumnos > 3);
    return cantAlumnos;
}
//!-----------------------Funcion donde se piden los datos de los alumnos--------------------
function pedidoDatosAlumnos(cantAlumnos) {
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
            sexoAlumno = +prompt('Ingrese sexo del alumno' + '\n' // Sexo de alumnos
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
        if (sexoAlumno == 1) {  //se convierte la opcion de sexo en la cadena qeu corresponde a la opcion
            sexoAlumno = "Hombre";
        } else if (sexoAlumno == 2) {
            sexoAlumno = "Mujer";
        }
        alumno = new Alumno(nombreAlumno, notaAlumno, edadAlumno, sexoAlumno); //se crea el objeto
        alumnosArray.push(alumno); //se agrega el objerto al array
    }
}

//!-----------------------Funcion para calcular promedio de edad--------------------
function calculoPromEdad() {
    if (sumaEdad === 0) {
        alert('Aún no ha ingresado datos de alumnos');
    } else {
        promedioEdad = sumaEdad / contAlumnos;
        alert(`La edad promedio de los ${contAlumnos} alumnos ingresados es ${promedioEdad}`);
    }
}

//!-----------------------Funcion para calcular promedio de notas--------------------
function calculoPromNotas() {
    if (sumaNotas === 0) {
        alert('Aun no ha ingresado datos de alumnos');
    } else {
        promedioNota = sumaNotas / contAlumnos;
        alert(`La nota promedio de los ${contAlumnos} alumnos ingresados es ${promedioNota}`);
    }
}

//!-----------------------Funcion para calcular promedio de edad--------------------
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



//!-----------------------Funcion para mostrar los datos calculados--------------------
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

//!-----------------------Funcion menu buscador--------------------
function menuBuscar() {
    let buscar;
    do {
        buscar = +prompt(
            "¿Que dato desea buscar?" + '\n'
            + "1.Nombre" + '\n'
            + "2.Nota" + '\n'
            + "3.Edad" + '\n'
            + "0. Volver al Menú Principal");
        switch (buscar) {
            case 1:
                buscarNombre();
                break;
            case 2:
                buscarNota();
                break;
            case 3:
                buscarEdad();
                break;
            default:
                if (buscar !== 0) {
                alert("INGRESO UNA OPCIÓN INCORRECTA!!");
            }
            break;
        }
    } while (buscar !== 0)

}


//!-----------------------Funcion recorrer Array y mostrar------------------------
function recorrer(array) {
    console.clear();
    let cont = 0;
    if (array == "") {
        alert("NO SE HAN ENCONTRADO ALUMNOS");
    } else {
        array.forEach(informacion => {
            cont++;
            console.log(
                "Alumno: " + informacion.nombre + '\n' +
                "Edad: " + informacion.edad + " Años" + '\n' +
                "Sexo: " + informacion.sexo + '\n' +
                "Nota: " + informacion.nota) + '\n';
        });
    }
    return cont;
}
//!-----------------------Funcion buscar por nombre--------------------
function buscarNombre() {
    if (contAlumnos == 0) {
        alert('AUN NO HA INGRESADO DATOS DE ALUMNOS!');
    } else {
        nAlumno = prompt("Ingrese el nombre del alumno/s que desea buscar");
        nAlumno = nAlumno.toUpperCase();
        const al = alumnosArray.filter(info => info.nombre == nAlumno);
        const res=recorrer(al);
        if(res!==0){
            alert(`${res} Alumnos se llaman ${nAlumno}`+'\n'+` Por consola podra ver los datos de los alumnos`);
        }
    }
}

//!-----------------------Funcion buscar por nota--------------------
function buscarNota() {
    if (contAlumnos == 0) {
        alert('AUN NO HA INGRESADO DATOS DE ALUMNOS!');
    } else {
        nAlumno = +prompt("Ingrese la nota que desea buscar");
        const al = alumnosArray.filter(info => info.nota == nAlumno);
        const res=recorrer(al);
        if(res!==0){
            alert(`${res} Alumnos sacaron la nota ${nAlumno}`+'\n'+` Por consola podra ver los datos del alumno/s`);
        }
    }
}

//!-----------------------Funcion buscar por edad--------------------
function buscarEdad() {
    if (contAlumnos == 0) {
        alert('AUN NO HA INGRESADO DATOS DE ALUMNOS!');
    } else {
        nAlumno = +prompt("Ingrese la edad que desea buscar");
        const al = alumnosArray.filter(info => info.edad == nAlumno);
        const res=recorrer(al);
        if(res!==0){
            alert(`${res} Alumno/s tienen ${nAlumno} años`+'\n'+ `Por consola podra ver los datos del alumno/s`);
        }
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
        + '7. Buscar Alumnos' + '\n'
        + '0. Salir del programa.');

    switch (operacion) {
        case 1:
            pedidoDatosAlumnos(pedidoCantAlumnos());
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
            const res= recorrer(alumnosArray);
            if(res!==0){
                alert(`En total ha ingresado ${res} alumnos, por consola podra ver los datos del alumno/s`);
            }
            break;
        case 7:
            menuBuscar();
            break;
        default:
            if (operacion !== 0) {
                alert("INGRESO UNA OPCIÓN INCORRECTA!!");
            }
            break;
    }
} while (operacion !== 0);
alert('Usted a salido del programa, refresque para comenzar nuevamente');


