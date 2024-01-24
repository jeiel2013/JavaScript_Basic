/*
&& -> false && true -> false
|| -> true || false -> ai retornar "o valor verdadeiro" 

FALSY
false
0
'' "" ``
null / undefined
NaN
*/

// function falaOi () {
//     return 'Oi';
// }
// const aiExecutar = 'false';
// console.log(aiExecutar && falaOi());

// console.log(0 || false || null || 'Luiz Otávio' || true)
// const corusuario = 'vermelho';
// const corPadrao = corusuario || 'preto';
// console.log(corPadrao)

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;
console.log(a || b || c || d || e)