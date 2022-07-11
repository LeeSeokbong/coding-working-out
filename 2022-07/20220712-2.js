let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220712.txt').toString().trim().split(" ");
let count = 1;
let str = input[0];
let num = +input[0];
let answer;
let answerNum = "";
if(num < 10) {
    str = "0" + str
}

for(let i = 0; i < 100; i++) {
    if(answer < 10) {
            answer = "0" + answer
        }
    answer = +str[0] + +str[1]
    if(answer < 10) {
            answer = "0" + answer
        }
    answerNum = answer.toString()
    console.log(answerNum)
    numAnswer = str[1] + answerNum[1]
    // console.log(numAnswer)
    if(+numAnswer !== num) {
        count++
        
        str = numAnswer.toString()
    } else {
        break;
    }
}
console.log(count)