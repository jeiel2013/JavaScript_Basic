// function saudacao(nome) {
//     return `Bom dia ${nome}!`;
// }

// const variavel = saudacao('Luiz');
// console.log(variavel);

// -------------------------------------------------------------------------------

// function soma(x,y) {
//     const resultado = x + y;
//     return resultado; // quando declara "return", a função acaba aqui
// }
// const resultado = soma(2,2); // esse const resultado não tem nada haver com o da função
// console.log(resultado);

// -------------------------------------------------------------------------------------

// const raiz = function(n) {
//     return n ** 0.5
// }; // nesse caso é obrigatório usar o ";"
// console.log(raiz(9));
// console.log(raiz(16));
// console.log(raiz(25));

// -------------------------------------------------------------------------------------

const raiz = n => n ** 0.5 // ISSO É UMA FUNÇÃO // Arrow function
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));