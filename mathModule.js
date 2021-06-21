const sum = (a, b) => a + b
const sub = (a, b) => a - b

module.exports = {
    sum,
    sub: (a, b) => a - b,
    mul: function (a, b) { return a * b},
    div: (a, b) => {return a / b }
}