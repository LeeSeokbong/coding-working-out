var stats = [5, 3, 4, 6, 2, 1]

var arr = [];
for(var i = 0; i < stats.length; i++) {
    if(i===0) {
        arr.push(stats[i])
    } else if(i!==0) {
            if(stats[i-1] < stats[i]) {
                arr.push(stats[i])
            }
        
    }
}

console.log(arr)

// document.querySelector("#answer").textContent = answer
