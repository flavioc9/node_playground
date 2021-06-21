/**
 * ### Exercício 1 ###
    Crie um programa que some 2 números​ 
    a) Passe os números por parâmetro na consola e crie a função sum(a,b)​
    b) Converta a funcao anterior simulando um callback
 */

const a = parseInt(process.argv[2])
const b = Number(process.argv[3])

// alinea A
const sum = (a, b) => a + b
const result = sum(a,b)
console.log(`O resultado da soma de ${a} + ${b} = ${result}`);

// alinea B
const sumAssync = (a, b, callback) => {
    setTimeout(() => {
        callback(sum(a,b))
    }, 2000)
}

sumAssync(a, b, (result) => {
    console.log(`O resultado da soma de ${a} + ${b} = ${result}`);
})