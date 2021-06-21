setTimeout(function () {
  console.log("World!");
}, 1);

// nada garante que este callback vai ser executado primeiro que o anterior
setTimeout(function () {
  console.log("from node!");
}, 0);

console.log("Hello ");
