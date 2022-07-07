let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220707.txt').toString().trim().split(" ");
let num1 = +input[0];
let num2 = +input[1];

if(num2 - 45 < 0) {
    if(num1 === 0) {
        num1 = 23;
    } else {
        num1 = num1 - 1;
    }
    num2 = 60 + num2 - 45;
} else {
    num2 = num2 - 45;
}
console.log(num1+" "+num2)