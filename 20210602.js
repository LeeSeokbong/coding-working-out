var absolutes = [4,7,12];
var signs = [true,false,true];
var answer = 0;

for (var i = 0; i < absolutes.length; i++) {
    if(signs[i] === true) {
        answer += Number(absolutes[i])
    } 
    else {
        answer += Number(-absolutes[i])
    }
}
// console.log(answer)
document.querySelector("#answer").textContent = answer