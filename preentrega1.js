// Calcularemos la edad promedio de los alumnos ingresados,
// estara la posibilidad de calcular el promedio de las notas del curso
// y la cantidad de alumnos varones y mujeres que integran el curso

let alumno; //
let nota = 0;
let edad;
let sexo;
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

do {
    operacion = +prompt('Bienvenido ingrese el número de la operacion que desea realizar' + '\n'
        + '1. Ingresar Datos del alumno.' + '\n'
        + '2. Calcular promedio de Edad de los alumnos ingresados.' + '\n'
        + '3. Calcular el promedio de las notas de los alumnos.' + '\n'
        + '4. Calcular % de varones y mujeres que hay en los alumnos que ingresó.' + '\n'
        + '5. Mostrar resumen de datos ingresados' + '\n'
        + '6. Salir del programa.');

    switch (operacion) {
        case 1:
            do {
                cantAlumnos = +prompt('Ingrese la cantidad de alumnos que desea ingresar' + '\n'
                    + 'máximo 3');
                if (cantAlumnos > 3 || cantAlumnos <= 0) {
                    alert('Por favor ingrese entre 1 y 3 alumnos');
                } else {
                    contAlumnos = contAlumnos + cantAlumnos;
                }
            } while (cantAlumnos <= 0 || cantAlumnos > 3);
            for (let k = 1; k <= cantAlumnos; k++) {
                alumno = prompt('Ingrese nombre');  // Nombre de alumnos
                do {
                    nota = +prompt('Ingrese Nota del 1 al 10');// Notas de alumnos
                    if (nota <= 0 || nota > 10) {
                        alert('Ingrese una nota entre 1 y 10');
                    } else {
                        sumaNotas = sumaNotas + nota;
                    }
                } while (nota <= 0 || nota > 10);
                edad = +prompt('Ingrese Edad'); // Edad de alumnos
                sumaEdad = sumaEdad + edad;
                do {
                    sexo = +prompt('Ingrese sexo del alumon' + '\n' // Sexo de alumnos
                        + '1. Hombre' + '\n'
                        + '2. Mujer' + '\n');
                    switch (sexo) {
                        case 1:
                            contHombre++;
                            break;
                        case 2:
                            contMujer++;
                            break;
                        default:
                            alert('El valor ingreasdo es incorrecto, por favor ingrese nuevamente');
                    }
                } while (sexo !== 1 && sexo !== 2);
            }
            break;
        case 2:
            if (sumaEdad === 0) {
                alert('Aún no ha ingresado datos de alumnos');
                break;
            } else {
                promedioEdad = sumaEdad / contAlumnos;
                alert(`La edad proedio de los ${contAlumnos} alumnos ingresados es ${promedioEdad}`);
                break;
            }
        case 3:
            if (sumaNotas === 0) {
                alert('Aun no ha ingresado datos de alumnos');
                break;
            } else {
                promedioNota = sumaNotas / contAlumnos;
                alert(`La nota promedio de los ${contAlumnos} alumnos ingresados es ${promedioNota}`);
                break;
            }
        case 4:
            if (contHombre == 0 && contMujer == 0) {
                alert('Aun no ha ingresado datos de alumnos');
                break;
            } else {
                porcHombre = (contHombre * 100) / contAlumnos;
                porcMujer = (contMujer * 100) / contAlumnos;
                alert(`De los ${contAlumnos} alumnos que ingresó:` + '\n'
                    + `${porcMujer}` + '%' + ' son Mujeres' + ' \n'
                    + `${porcHombre}` + '%' + ' son Hombres.');
                break;
            }
        case 5:
            if (contAlumnos === 0) {
                alert('Aun no ha ingresado datos de alumnos');
                break;
            } else {
                if (promedioEdad === 0) {
                    alert('Aun no ha realizado el cálculo de promedio de edad, seleccione la opcion 2 primero');
                    break;
                } else {
                    if (promedioNota === 0) {
                        alert('Aun no ha realizado el cálculo de promedio de notas, seleccione la opcion 3 primero');
                        break;
                    } else {
                        if (porcHombre == 0 && porcMujer == 0) {
                            alert('Aun no ha realizado el cálculo de porcentaje de sexo, seleccione la opcion 4 primero');
                            break;
                        } else {
                            alert(`Usted ha ingresado los datos de ${contAlumnos} alumnos` + '\n'
                                + `de los cuales ${porcMujer}` + '%' + ` son mujeres y el ${porcHombre}` + '% son hombres' + '\n'
                                + `el promedio de notas de los alumnos ingresados es ${promedioNota}` + '\n'
                                + `y el promedio de edad es ${promedioEdad}`);
                            break;
                        }
                    }
                }
            }
    }
} while (operacion !== 6 && operacion !== 0);
alert('Usted a salido del programa, refresque para comenzar nuevamente');


