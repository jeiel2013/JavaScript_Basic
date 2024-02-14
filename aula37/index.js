//            0123456789
// const nome = 'Luiz Otávio'; // -> L U I Z   O T Á V I O  
const nome = ['Luiz', 'Otávio', 'Henrique']; // -> Luiz  Otávio   Henrique

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retornar o valor em si (iteráveis, arrays ou strings)

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log("####")

for (let i in nome) {
    console.log(nome[i]);
}

console.log("####")

for (let valor of nome) {
    console.log(valor);
}

console.log("####")

nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});