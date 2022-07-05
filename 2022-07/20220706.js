let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220706.txt').toString().trim().split(" ");
let num1 = +input[0];
if(num1 === 100 || num1 >= 90) {
    console.log("A")
} else if(num1 < 90 && num1 > 79) {
    console.log("B")
} else if(num1 < 80 && num1 > 69) {
    console.log("C")
} else if(num1 < 70 && num1 > 59) {
    console.log("D")
} else {
    console.log("F")
}