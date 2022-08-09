const nineros = false;
const hambre = true;

alert(nineros == hambre);  // false

alert(nineros || hambre); // true

// AND
// Todas las condiciones deben ser true
// true && true  => true
// true  && false => false
// false && false => false


// OR
// Solo una condicion debe ser true
// true || true = true
// true || false = true
// false || false = false

// NOT
// Es la negación a la condición
// true => false, false => true

var hungry = false;

if (hungry == true) {
	alert("Tengo mal del porky");
} else {

	alert("Two mimir");
}

var hour = 20;

if (hour < 18) {
 alert("Good day");
} else {
  alert("Tardes, ya");
}

var hora = 12;

if (hora <= 7 && hora > 0) {
	alert("Buenas madrugadas");
} else {
	alert("Que tenga un buen dia");
}

var hora = 12;

if (hora > 0) {

	if (hora <= 7) {
    	alert("Buenas madrugadas");
    } else {
    	alert("Que tenga un buen dia");
    }
    
} else {

	alert("Su hora no existe");
    
}

// switch
var dia = new Date().getDay();

function evalDate(day) {
	switch(day){
	case 0:
		return "Domingo";
        break;
    case 1:
    	return "Lunes";
        break;
    case 2:
    	return "Martes";
        break;
    case 3:
    	return "Miercoles";
        break;
    case 4:
    	return "Jueves";
        break;
    case 5:
    	return "Viernes";
        break;
    case 6:
    	return "Sabado";
        break;
	}
}

alert(evalDate(dia));

let dinero = prompt("Ingrese su deposito");

function miCarrito(nineros) {
    switch(true) {
        case (dinero <= 10):
            return "Churrumais";
            break;
        case (dinero <= 50):
            return "McTrio";
            break;
        case (dinero <= 100):
            return "Chilaquiles verdes c/ poio y 1/2L de naranja";
            break;
        case (dinero <= 500):
            return "1/2kg de chicharrones y 1 boleto al cine";
            break;
        default:
            return "No hay nineros";
    }
}

alert(miCarrito(dinero));

