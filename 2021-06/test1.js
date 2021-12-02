var s = "BABZZaZB"
s= s.toLowerCase();
var array = [];
var answer = "";
for(var i = 0; i < s.length; i++) {
    array.push(s[i])
}


var counts = array.reduce((pv, cv)=>{ 
    pv[cv] = (pv[cv] || 0) + 1; return pv; 
}, {});
    var keys = Object.keys(counts); 
    var mode = keys[0]; 
    keys.forEach((val, _idx)=>{ 
        if(counts[val] > counts[mode]){
            mode = val; 
            } 
        }
    );

// document.querySelector("#answer").textContent = answer
console.log(mode)

