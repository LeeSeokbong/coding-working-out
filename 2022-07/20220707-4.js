let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = require('fs').readFileSync('20220707.txt').toString().trim().split("\n");
let num1 = input[0];
let num2 = +input[1];
let time = num1.split(" ")
let time1 = +time[0]
let time2 = +time[1]

if(time2 + num2 >= 60) {
    time2 = time2 + num2
    if(time2 >= 60) {
        time1 = time1 + parseInt(time2 / 60)
        if(time1 >= 24) {
            time1 = time1 % 24;
        }
        time2 = time2 % 60;
    }
} else {
    time2 = time2 + num2;
}
console.log(time1+" "+time2)