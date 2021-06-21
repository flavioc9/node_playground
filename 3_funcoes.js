function nomeDaFuncao(){
    console.log("Funcão 1")
}

const nomeDaFuncao2 = function (){
    console.log("Funcão 2")
}

const nomeDaFuncao3 = () => {
    console.log("Funcão 3")
}

const nomeDaFuncao4 = (arg) => {
    console.log("Funcão 4 " + arg)
}

const nomeDaFuncao5 = (arg) => {
    return "Funcão 5 " + arg
}

const nomeDaFuncao6 = (arg) => "Funcão 6 " + arg

const obj = {
    nome : "test",
    funcao : () => { console.log("Isto imprime ???")},
};

(()=>{console.log("fucao anonima , auto invoca")})()

function comCallback(agr, callback){
    console.log(agr)
    callback()
}


//Invocar
nomeDaFuncao()
nomeDaFuncao2()
nomeDaFuncao3()
nomeDaFuncao4("test")
console.log(nomeDaFuncao5("test"));
console.log(nomeDaFuncao6("test"));
console.log(obj.nome);
obj.funcao();

// com callback
comCallback("arg de test", () => {
    console.log("invocado por quem?")
})

comCallback("arg de test", nomeDaFuncao)