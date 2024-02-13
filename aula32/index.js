// let a = 'A';
// let b = 'B';
// let c = 'C';
// const letras = [b, c, a];
// [a, b, c] = letras;
// console.log(a, b, c);

// ... rest, ... spread

//               0  1  2  3  4  5  6  7  8  // ìndice
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  const [um, dois, tres] = numeros;
// const [um, , tres, , cinco, , sete] = numeros;
// console.log(um, tres, cinco, sete);
// console.log(resto) // ...resto


//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
// console.log(numeros[1][2]); // pegar o número 6
// const [, [,, seis]] = numeros; // mais complexo de pegar o número 6
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]); 