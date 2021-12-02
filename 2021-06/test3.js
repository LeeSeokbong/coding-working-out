var encrypted_text = "hellopython"
var key = "abcdefghijk"
var rotation = 3;
var answer = "";
var arr = [];
var arp = "abcdefghijklmnopqrstuvwxyz";

for(var i = 0; i < key.length; i++) {
    var num = (arp.indexOf(encrypted_text[i])) - (arp.indexOf(key[i]) +1)
    if(num >= 27) {
        num = num - 26
    }
    answer += arp.charAt(num)
}
for(var j = 0; j < rotation; j++) {
    var last = answer.charAt(answer.length-1);
    var sliceStr = answer.slice(0,-1);
    answer = last + sliceStr
}

console.log(answer)

// document.querySelector("#answer").textContent = answer
