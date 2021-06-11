var a = 5;
var b = 3;
var s = ""

for (var i = 0; i < b; i++) {
        if(i !== 0){
            s += '\n'
        }
    for(var j = 0; j < a; j++) {
        s += "*"
    }
}
console.log(s)