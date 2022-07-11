let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220711.txt').toString().trim().split("\n");
let num = +input[0];
let answer = ""

for(let i = 1; i <= num; i++) {
    for(let k = num; k > i; k--) {
        answer += " "
    }
    for(let j = 1; j <= i; j++) {
        answer += "*"
    }
    answer += "\n"
}

console.log(answer)