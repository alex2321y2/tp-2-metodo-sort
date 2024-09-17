let numeros = [];

for (let i = 0; i < 15; i++) {
    let numero = parseInt(prompt("Ingresa el número:"));
    numeros.push(numero);
}

numeros.sort((a, b) => a - b);

console.log("Lista de números ordenada de menor a mayor:");
console.log(numeros);



