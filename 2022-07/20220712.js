let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220712.txt').toString().trim().split("\n");
let num = input;
let answer = ""

console.log(input.length)
for(let i = 0; i < input.length; i++) {
    let numLine = num[i].split(" ");
    if(+numLine[0] === 0 && +numLine[1] === 0) {
        break;
    } else {
        answer += +numLine[0] + +numLine[1] + "\n"
    }
}
console.log(answer)