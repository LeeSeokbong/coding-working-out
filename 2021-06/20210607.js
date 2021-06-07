var n = 45;
var answer = 0;
// n.toString().split("").reverse().join("")
n= parseInt(n.toString(3).split('').reverse().join(''), 3)

console.log(typeof n)
console.log(n)
// document.querySelector("#answer").textContent = answer