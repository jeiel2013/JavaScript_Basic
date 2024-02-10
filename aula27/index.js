// ? :
// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso'

const pontuacaoUsuario = 1000;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
// console.log(nivelUsuario)
// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário Normal');
// }

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';
console.log(nivelUsuario, corPadrao)
