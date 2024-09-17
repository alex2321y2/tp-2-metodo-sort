let numerosAleatorios = [];

for (let i = 0; i < 10; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 10);
    numerosAleatorios.push(numeroAleatorio);
}

numerosAleatorios.sort((a, b) => a - b);

console.log("Lista de números aleatorios ordenada de menor a mayor:");
console.log(numerosAleatorios);          
      






