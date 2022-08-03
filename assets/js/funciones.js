//Mejores prácticas
//Simplificar funciones lo más que se pueda

// 1. Utilizar keyword function
// 2. Nombrar nuestra función
//3. Utilizar () y abrir y cerrar la función 
function myFunction () {
//here is the body of our function
 console.log ("Hola Mundo");
} 
myFunction ()
//MyFunction
function myName () {
 let name ="Marlene Sanchez";
 console.log (name);
}
myName ()
//myName();

//variable con scope local
function scopefunction () {
 let local ="esto se encuentra dentro de la funcion"
 console.log (local);
}
scopefunction ();
console.log (local);
//scopeFunction();
//console.log (local);
var nombre ="Daniel Campos";
function globalScope () {
 console.log (nombre);

}
// globalScope (); //

//Scope de variables
//LET
//Scope global, local
//Hoisting: la variable no existe para nmuestro interprete JS
console.log (a);
let a = "Hoisting let";

//Var
//scope global, local
//Hoisting: no se puede utilizar o invocar antes de declararla
//antes de declararla aparece como undefined
console.log (x);
var x = "Hola";



//CONST
//scope global, local
//Hoisting no se puede utlizar, no existe para nuestro interpreter de JS
//console.log (c);
const c = "Hoisting const"

//Input
const miNombre = "Daniel";
function fiuFiu (x) {
 //console.log (x);

}
//parametro declarado en variable
fiuFiu (miNombre);
//parametro aleatorio
fiuFiu ("Daniel Campos");
fiuFiu ("2");

//fiuFiu (miNombre, 2);


//Function con más de 1 parametro
function dosParam() {
console.log (x, y);
console.log(x + y);

}
//Invocation with 2 parametres aleatories
dosParam ("Hola", "Mundo");

//invocation with 3 parametres 
function tresParam (x, y, z) {
 console.log (x+y+z);

}
tresParam ("Hola", "Soy", "Campos");

//output
function out () {
 let x= "Hola"
  return x;
 

}
//podemos recibir el dato de forma directa 
//console.log (out());
//podemos guardar el output en una variable 
//y la podemos utilizar después
const receive =out ();

//console.log (receive);

//funcion con parametros y return
function areaRectangulo (b, a) {
 var resultado = b*a
 return resultado;
}
console.log (areaRectangulo (6, 3));
//function con parametros y returno, calcular area triangulo
function areaTriangulo (b,a) {
  var resultado = b * a /2; 
  return resultado;
}
console.log (areaTriangulo(8, 4));
