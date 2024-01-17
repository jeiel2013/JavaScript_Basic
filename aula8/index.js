const nome = "Jeiel Jedson"
const sobrenome = " Ales"
const idade = 18
const peso = 70
const altura = 1.63
let imc // peso / (altura * altura )
let anoNascimento

imc = peso / (altura * altura)
anoNascimento = 2023 - idade

console.log(nome + sobrenome + " tem " + idade + " anos, pesa " + peso + " kg.")
console.log(`Tem ${altura} de altura e seu IMC é de ${imc}.`)
console.log(nome, "nasceu em", anoNascimento + ".") 

