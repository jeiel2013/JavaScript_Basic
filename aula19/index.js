/*
Primitios (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

Referência (mutável) - array, object, function 
*/

// let nome = 'Luiz';
// nome[0] = 'R'; // imutável, o índice da string não muda
// console.log(nome[0], nome)

// -------------------------------------------------------------------------------------

// let a = 'A';
// let b = a; // Cópia
// console.log(a, b);
// a = 'Outra coisa';
// console.log(a, b)

// -------------------------------------------------------------------------------------

// let a = [1, 2, 3];
// let b = a; // os dois apontam pro mesmo alor na memória, assim, se mudar a, também muda o b
// console.log(a, b)
// a.push(4)
// console.log(a, b)
// b.pop()
// console.log(a, b)

// -------------------------------------------------------------------------------------

const a = {
    nome: 'Jeiel',
    sobrenome: 'Jedson'
};
// const b = a; // também aponta no mesmo local
const b = {...a} // está copiando o objeto "a", passando a ser independeente dele
a.nome = 'João';
console.log(a, b);