var participant = 	["mislav", "stanko", "mislav", "ana"]
var completion = ["stanko", "ana", "mislav"]
var answer = '';

participant.sort();
completion.sort();
for(var i = 0; i < participant.length; i++) {
    if(participant[i] !== completion[i]) {
        return participant[i]
    }
}


// var newList = participant.reduce((acc, p) => {
//     acc[p] = (acc[p]) ? acc[p] + 1 : 1;
//     return acc;
// }, {});
//     completion.forEach((c) => {
//     if (newList[c]) {
//         newList[c] -= 1;
//     }

//     if (newList[c] === 0) {
//         delete newList[c]
//     };
// });
// document.querySelector("#answer").textContent = Object.keys(newList)[0]
//     console.log(Object.keys(newList)[0])
    // return Object.keys(newList)[0];
    
    
    
    
// participant.sort()
// completion.sort()

// for(var i = 0; i < participant.length; i++) {
//     if(participant[i] === participant[i-1]) {
//         answer = participant[i] 
//         break
//     }
// }
// if(answer === '') {
//     answer = participant.filter(x => !completion.includes(x)).toString()
// }

// for(var i = 0; i < participant.length; i++) {
//     if(participant[i] !== completion[i]) {
//         answer = participant[i]
//         return
//     }
// }
// if(answer === '') {
//     for(var i = 0; i < participant.length; i++) {
//         if(participant[i] !== completion[i]) {
//             answer = participant[i]
//         break
//         } 
//     }
// }
// answer = participant.filter(participant, i => participant[i] !== completion[i]).toString()
// answer = participant.filter(value => !completion.includes(value)); 
