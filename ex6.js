const sumAssync = (a, b) => {
    return new Promise((resolve, reject) => {
        if(a < 0 || b < 0){
            reject("Só são premitidos numeros positivos!")
        }
        setTimeout(() =>{
            resolve(a+b);
        }, 2000)
    })
}

sumAssync(1,2)
    .then((sum) => {
        console.log("O valor da soma é: " + sum )
        return sumAssync(sum, 10)
    })
    .then((sum) => {
        console.log("O valor da soma é: " + sum )
        return sumAssync(sum, -10)
    })
    .then((sum) => {
        console.log("O valor da soma é: " + sum )
    })
    .catch((reason) => { console.log(reason) })