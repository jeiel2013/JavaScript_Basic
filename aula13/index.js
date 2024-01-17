//            01234567
let string = "Um texto"
let umaString = 'Um "texto" '
let b = "Um \"texto\""
let c = "Um \\texto"

// console.log(string.concat(' em um lindo dia'))
// console.log(string + ' em um lindo dia')
// console.log(`${string} em um lindo dia`)

console.log(string.indexOf("texto"))
console.log(string.match(/[a-z]/g))
console.log(string.search(/[x]/))
console.log(string.replace('Um', 'Outro'))

let d = "O rato roeu a roupa do rei de roma."
console.log(d.replace(/r/g, '#'))
console.log(d.length)
console.log(d.slice(2, 6))
console.log(d.toUpperCase())
