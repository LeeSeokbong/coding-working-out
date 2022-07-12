let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220712.txt').toString().trim().split(" ");
let count = 0;
let str = input[0];
let num = +input[0];
let answer;
let answerNum = "";
let numAnswer;
if(num < 10) {
    str = "0" + str
}

while(+numAnswer !== num) {
    answer = +str[0] + +str[1]
    if(answer < 10) {
            answer = "0" + answer
        }
    answerNum = answer.toString()
    numAnswer = str[1] + answerNum[1]
    count++
    str = numAnswer.toString()
    
}
console.log(count)