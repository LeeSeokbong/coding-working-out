let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220710.txt').toString().trim().split("\n");
let num = +input[0];
let answer = ""

for(let i = 1; i < num+1; i++) {
    let sum = input[i].split(" ");
    answer += "Case #" + i + ": " + (+sum[0] + +sum[1]) + "\n"
}

console.log(answer)