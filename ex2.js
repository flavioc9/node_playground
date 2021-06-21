/**
 * Crie um programa que leia um ficheiro e mostre o seu conteúdo na consola.​
    a) Passe o nome do ficheiro por parâmetro na consola​
    b) Adicione uma linha no ficheiro​
    c) Apague o ficheiro​
 */

const fs = require('fs');

const fileName = process.argv[2];
const data = "linha adicionada ao ficheiro\n"

// alinea a
fs.appendFile(fileName, data, (err) =>{
    if(err) console.error(err)
    console.log("Adicionada nova linha ao ficheiro")
    // apagamos o ficheiro depois de o criar...
    fs.unlink(fileName, (err) => { 
        if(err) console.error(err)
        console.log("Ficheiro removido")
    } )
})
