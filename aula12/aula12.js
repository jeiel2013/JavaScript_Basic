let carA = 'A' // alor de B
let carB = 'B' // alor de C
let carC = 'C' // alor de A

let carD = carC
carC = carA
carA = carB
carB = carD

console.log(carA, carB, carC)