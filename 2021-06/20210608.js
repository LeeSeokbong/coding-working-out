var array = [1, 5, 2, 6, 3, 7, 4];
var commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
var answer = [];

commands.forEach(function(command) {
    var sliceArr = array.slice(command[0]-1, command[1]);
    sliceArr.sort((a,b) => a - b);
    sliceArr = sliceArr.slice(command[2]-1, command[2])
    answer.push(Number(sliceArr))
    if(commands.length === answer.length) {
        console.log(answer)
    }
})

// for(var i = 0; i <commands.length; i++) {
//     var sliceArr = array.slice(commands[i][0]-1, commands[i][1]);
//     sliceArr.sort()
//     sliceArr = sliceArr.slice(commands[i][2]-1, commands[i][2])
//     // answer.push(Number(sliceArr))
//     if(commands.length === answer.length) {
//         console.log(answer)
//     }
// }
// console.log(answer)
// document.querySelector("#answer").textContent = sliceArr

