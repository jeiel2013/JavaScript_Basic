// try {
//     // É executada quando não há erros.
//     console.log(a); // ERRO
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
// } catch (error) {
//     // É executada quando há erros.
//     console.log('Tratando o erro');
// } finally {
//     // Sempre é executado.
//     console.log('FINALLY: Eu sempre sou executado');
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }

    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch (error) {
    // Tratar erro
} finally {
    console.log('Tenha um bom dia.')
}
