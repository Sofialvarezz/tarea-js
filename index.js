class Estudiante{
    constructor(nombre, materias, calificaciones){
        let _nombre = nombre;
        let _materias = materias;
        let _calificaciones = calificaciones;
        this.setNombre=function(nombre){
            _nombre=nombre;
        };
        this.setMaterias=function(materias){
            _materias= materias;
        };
        this.setClaficaciones=function(calificaciones){
            _calificaciones= calificaciones;
        };
        this.getNombre= () => _nombre;
        this.getCalificaciones= () => _calificaciones;
        this.getMaterias= () => _materias;
    }
}

let pepito = new Estudiante("Pepe Perez",["MD", "IP"], [4,5]);
let juanito = new Estudiante("Juan Jose",["MD", "IP"], [3,2]);
let joseito = new Estudiante("Jose Juan",["MD", "IP"], [5,5]);
let registro =[pepito, juanito, joseito];

function agregar (nuevo){
registro.push(nuevo);
}

function eliminar (estudiante){
    const indice= registro.indexOf(estudiante);
    if(indice!=-1){
        registro.splice(indice,1);
    }
    return indice;
}

//asumo que no se le puede editar el nombre
function editar(estudiante){
    let editado=false;
    for(let i=0; i<registro.length &&! editado; i++){
        if(estudiante.getNombre()==registro[i].getNombre()){
            registro[i]=estudiante;
            editado= true;
        }
    }
    return editado;
}

function promedio(estudiante){
    let prom=0;
    for(let i=0; i<estudiante.getCalificaciones().length; i++){
        prom+=estudiante.getCalificaciones()[i];
    }
    if(estudiante.getCalificaciones().length!=0){
        prom= prom/estudiante.getCalificaciones().length;
    }
    return prom;
}

//probando funcion agregar
let luisma =new Estudiante("Luis Mariano Garcia",["MD", "IP"], [5,5]);
agregar(luisma);
console.log("El nuevo estudiante se llama", registro[3].getNombre());

//probando funcion eliminar
console.log("El primer alumno del registro es", registro[0].getNombre());
eliminar(registro[0]);
console.log("Luego de eliminar, El primer alumno del registro es", registro[0].getNombre());

//probando funcion editar y funcion promedio
console.log("el promedio del 1er alumno de registro antes de modificar sus calificaciones es",promedio(registro[0]));
let juanito2 = new Estudiante("Juan Jose",["MD", "IP"], [5,3]);
editar(juanito2);
console.log("el promedio del 1er alumno de registro despues de modificar sus calificaciones es",promedio(registro[0]));