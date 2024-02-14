// For in -> lê os índices ou chaves do objeto
//                0        1      2
// const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// for (let indice in frutas) {
//     console.log(frutas[indice]);
// }

const pessoa = {
    nome: 'Jeiel',
    sobrenome: 'Alves', 
    idade: 18
};
// console.log(pessoa['nome']);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}