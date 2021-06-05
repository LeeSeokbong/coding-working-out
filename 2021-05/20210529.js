var answer = 0;
var n = 5;
var lost = [1, 2, 3];
var reserve = [2, 3, 4];

answer = n - lost.length
    for(var i = 0; i < reserve.length; i++) {
        for(var j = 0; j < lost.length; j++) {
            if(reserve[i] === lost[j]) {
                answer++
                reserve.splice([i], 1)
                lost.splice([j], 1)
            }
        }
    }
    for(var i = 0; i < reserve.length; i++) {
        for(var j = 0; j < lost.length; j++) {
            if(reserve[i] !== undefined) {
                if(reserve[i] === lost[j]) {
                answer++
                delete reserve[i]
                delete lost[j]
                }
                else if(reserve[i]+1 === lost[j]) {
                    answer++
                    delete reserve[i]
                    delete lost[j]
                }
                else if(reserve[i]-1 === lost[j]) {
                    answer++
                    delete reserve[i]
                    delete lost[j]
                }
            }
        }
    }

// for(var i = 0; i < reserve.length; i++) {
//     for(var j = 0; j < lost.length; j++) {
//         if(reserve[i] === lost[j]) {
//             answer++
//             reserve.splice([i], 1)
//             lost.splice([j], 1)
//         }
//     }
// }
// answer = n - lost.length

// for(var i = 0; i < reserve.length; i++) {
//     for(var j = 0; j < lost.length; j++) {
//         if(reserve[i] !== undefined) {
//             if(reserve[i]-1 === lost[j]) {
//                 answer++
//                 delete reserve[i]
//                 delete lost[j]
//             }
//             else if(reserve[i]+1 === lost[j]) {
//                 answer++
//                 delete reserve[i]
//                 delete lost[j]
//             }
//         }
//     }
// }


// function solution(n, lost, reserve) {
//     var answer = 0;
    
    // answer = n - lost.length

    // for(var i = 0; i < reserve.length; i++) {
    //     for(var j = 0; j < lost.length; j++) {
    //         if(reserve[i] !== undefined) {
    //             if(reserve[i] === lost[j]) {
    //             answer++
    //             delete reserve[i]
    //             delete lost[j]
    //         }
    //         else if(reserve[i]+1 === lost[j]) {
    //             answer++
    //             delete reserve[i]
    //             delete lost[j]
    //         }
    //         else if(reserve[i]-1 === lost[j]) {
    //             answer++
    //             delete reserve[i]
    //             delete lost[j]
    //         }
    //     }
    //     }
    // }
//     return answer;
// }

// function solution(n, lost, reserve) {
//     var answer = 0;
//     lost.sort();
//     reserve.sort();
//     answer = n - lost.length
//         for(var i = 0; i < reserve.length; i++) {
//         for(var j = 0; j < lost.length; j++) {
//             if(reserve[i] === lost[j]) {
//                 answer++
//                 reserve.splice([i], 1)
//                 lost.splice([j], 1)
//             }
//         }
//     }
//     for(var i = 0; i < reserve.length; i++) {
//         for(var j = 0; j < lost.length; j++) {
//             if(reserve[i] !== undefined) {
//                 if(reserve[i]-1 === lost[j]) {
//                     answer++
//                     delete reserve[i]
//                     delete lost[j]
//                 }
//                 else if(reserve[i]+1 === lost[j]) {
//                     answer++
//                     delete reserve[i]
//                     delete lost[j]
//                 }
//             }
//         }
//     }
//     return answer;
// }


console.log(answer)
// document.querySelector("#answer").textContent = answer