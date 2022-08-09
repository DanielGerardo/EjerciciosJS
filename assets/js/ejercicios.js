// function idCard(id,nombre,direccion,pasaTiempo){
// return "Hola soy "+ nombre+ " mi Dirección es " + direccion +" mi pasa tiempo es " + pasaTiempo +" con idCard "+ id;

// }
// alert(idCard(2,"Daniel","Cierlas","Comer"));
// function calcularEdadMascota(edad){
//   edad = edad * 7;
//   return "La edad de mi perro es de "+ edad;
// }
// alert(calcularEdadMascota(2));

/// Ejercicios condicionales

function verificarParInpar(numero){
    
    if(numero % 2 == 0){
        alert("Es Par");
    }else{
        alert("Es Inpar");
    }
}

function verificarEdad(edad){
    
    if(edad>0 && edad>=18){
        alert("Crear cuenta");
    }else if(edad>0){
        alert("Sorry tas chiquito");
    }else{
        alert("Acaray no existes D:");
    }
}


    let respuesta = prompt("Verificar edad posion = 1 , Verificar numero par = 2");
    if(respuesta==1){
        let edad = prompt("¿Cúal es tu edad?");
        verificarEdad(edad);
        
    }else if(respuesta==2){
        let numero = prompt("Ingresa el primer numero");
        verificarParInpar(numero);
        
    }else{
        alert("Que loco hackeaste el sistema");
        
    }
    
    function Adal(){
        let anioDeNacimiento = prompt("Ingresa tu anio de nacimiento");
        let anioActual = new Date().getFullYear();
        let mayorDeedad = anioActual - anioDeNacimiento;

        if (mayorDeedad >= 18) {
        alert("Eres mayor de edad");
        } else {
        alert("Eres menor de edad");
        }

    }


