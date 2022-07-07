let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220707.txt').toString().trim().split(" ");
let num1 = +input[0];
let num2 = +input[1];
let num3 = +input[2];
if(num1 === num2 && num2 === num3 && num1 === num3) {
    console.log(num1*1000+10000)
} else if (num1 === num2) {
    console.log(num1*100+1000)
} else if (num2 === num3) {
    console.log(num2*100+1000)
} else if (num1 === num3) {
    console.log(num1*100+1000)
} else {
    if(num1 > num2) {
        if(num1 > num3) {
            console.log(num1*100)
        } else if(num2 > num3) {
            console.log(num2*100)
        } else {
            console.log(num3*100)
        }
    } else {
        if(num2 > num3) {
            console.log(num2*100)
        } else {
            console.log(num3*100)
        }
    }
}