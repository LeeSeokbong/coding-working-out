let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220711.txt').toString().trim().split("\n");
let num0 = input[0];
let num1 = input[1];
let num0line = num0.split(" ");
let num1line = num1.split(" ");
let answer = ""

for(let i = 0; i <= num0line[0]; i++) {
    if(+num0line[1] > +num1line[i]) {
        answer += num1line[i] + " "
    }
}

console.log(answer)