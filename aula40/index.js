const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {

    if (numero === 2 /*|| numero === 5*/) {
        console.log("Pulei o número 2");
        continue; // pular pra proxima iteração do laço.
    }

    if (numero === 7) {
        break; // primeira vez que encontra, nada dps mais vai ser executado.
    }

    console.log(numero);
}