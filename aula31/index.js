const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

// let nome = 'Luiz'; // criando
// var nome2 = 'Luiz'; // criando
// // var nome2 = 'Otávio'; // com var dá pra sobrescrever 

// var nome2 = 'Otávio'; // Redeclarada
// console.log(nome, nome2);

// if (verdadeira) {
//     let nome = 'Otávio'; // criando
//     var nome2 = 'Rogério'; // redeclarando
//     // var nome2 = 'Otávio'; // Redeclarada
//     // console.log(nome, nome2);

//     if (verdadeira) {
//         let nome = 'Outra coisa'; // criando
//         var nome2 = 'Ronaldo'; // Redeclarada
//     }
// }

// console.log(nome, nome2); // Vai aparecer "Ronaldo"


// function falaOi() {
//     // var nome = 'Luiz';
//     var sobrenome = 'Miranda';

//     if (verdadeira) {
//         let nome = 'Luiz';
//         console.log(sobrenome)
//     }

//     // console.log(nome); // VAi gerar um erro fora do bloco if
// }
// // console.log(nome); // Vai dar erro, pois só está dentro da função
// falaOi();

