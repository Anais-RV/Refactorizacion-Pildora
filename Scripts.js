// Creamos un array que contiene diferentes tipos de cafés y su precio.

const coffeeTypes = [ 
    { name: "Espresso", price: 2.5 },
    { name: "Cappuccino", price: 3.0 },
    { name: "Latte", price: 3.5 },
    { name: "Mocha", price: 4.0 }
  ];


// Objetivo recorrer el array para que nos muestre en pantalla todos los tipos de café y su precio
// Pintamos "Cafés disponibles"
// Usamos un for que nos permita recorrer el array posición a posición
// Usamos la vble i para numerar los tipos de cafés.
// En cada iteración de ese array imprimimos de forma dinámica con interpolación de cadenas/template ${NOMBREDELARRAY[i].PROPIEDAD} el precio de cada café

console.log("Original:");
console.log("Cafés disponibles:");
for (var i = 0; i < coffeeTypes.length; i++) {
console.log(`${i + 1}. ${coffeeTypes[i].name} - Precio: €${coffeeTypes[i].price}`);
}

// Objetivo un código refactorizado.

console.log("\nRefactorizado\n");

// Pintamos por pantalla el código título
// Usamos un forEach para ya que sabemos que queremos imprimir TODAS las posiciones del array secuencialmente. 
// Con una función callback con dos parámetros (coffe representará el elemento actual del array, index su posición) imprimimos en pantalla los precios de cada café.

console.log("Cafés disponibles:");
coffeeTypes.forEach((coffee, index) => {
console.log(`${index + 1}. ${coffee.name} - Precio: €${coffee.price}`);
});

console.log("\nRefactorizado\n");

// En este caso declaramos una constante messages
// Usamos el método .map para crear un nuevo array "message"
// El método map, mapea el array coffee y nos permitirá crear una cadena de texto que combina el número, el nombre y el precio de cada café 
// Message sería igual a esto: [  "1. Espresso - Precio: €2.5",  "2. Cappuccino - Precio: €3.0",  "3. Latte - Precio: €3.5",  "4. Mocha - Precio: €4.0"]
// Usamos el método .join para unir todos los "messages" y usamos como separador un salto de linea para organizarlos, evitamos así varias llamadas a console.log.

console.log("Cafés disponibles:"); 
const messages = coffeeTypes.map((coffee, index) => `${index + 1}. ${coffee.name} - Precio: €${coffee.price}`);
console.log(messages.join("\n")); 


console.log("\n-------------------------------------------------------\n");

// Objetivo recorrer el array de cafés e indicar cuales son caros o económicos según el criterio dado: "si >3 = caro, si < 3 = económico"
// Declaramos un for que funciona como iterador, recorriendo cada posición del array y usamos el método .lenght para recorrerlo de forma íntegra.
// Creamos una vble "message" que recogerá si el café es caro o barato en cada iteración según criterio.
// Sustituimos de forma dinámica el nómbre del café con interpolación de cadenas/template ${coffeTypes[i].name}
// Imprimimos para cada posición del array si ese café es caro o económico. 

console.log("Original:");
for (var i = 0; i < coffeeTypes.length; i++) { 
    var message = ""; 

if (coffeeTypes[i].price > 3.0) {  
    message = `El café ${coffeeTypes[i].name} es caro`;
} else {
    message = `El café ${coffeeTypes[i].name} es económico`;
}

console.log(message);
}

// Refactorizar ese mismo código con un operador ternario.
// Usaremos forEach en lugar de un for ya que sabemos que queremos recorrer el array completo, posición a posición.
// Declaramos una variable message y la igualamos al resultado de aplicar el operador ternario con valor si "verdaro" : si "falso"

console.log("\nRefactorizado\n");

coffeeTypes.forEach(coffee => { 
    const message = coffee.price > 3.0 ? `El café ${coffee.name} es caro` : `El café ${coffee.name} es económico`; 
console.log(message); // Imprimimos por consola
});

// Un poquitín más refactorizado aún: usamos una función callback que se ejecuta cada vez que iteramos sobre un elemento del array.
// Incluimos console.log dentro del forEach, de forma que podemos prescindir de la constante message

console.log("\nRefactorizado\n");

coffeeTypes.forEach(coffee => console.log(`El café ${coffee.name} es ${coffee.price > 3.0 ? "caro" : "económico"}`));

