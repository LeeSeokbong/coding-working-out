

var marquee = document.querySelector("#marquee");
var marqueeInput = document.querySelector("#marqueeInput");
var marqueeInputText = marqueeInput.value;

function marquee1() {
    var marqueeText = document.createElement("p")
    marqueeText.setAttribute("id", "power1")
    marqueeText.setAttribute("class", "power")
    marqueeText.textContent = "0123456789"
    marquee.append(marqueeText)
    timer(marqueeText)
}

function timer(marqueeText) {
    var marqueeTimer = setInterval(function() {
        marqueeText = document.querySelectorAll("#power1")
        marqueeText.forEach(function(){
            for(i=0; i < marqueeText.length; i++){
            marqueeText[i].style.left = marqueeText[i].offsetLeft + 1 + "px";;
            if(marqueeText[i].offsetWidth + 20 === marqueeText[i].offsetLeft){
            clearInterval(marqueeTimer)
            marquee1()
            }
            if(marquee.clientWidth < marqueeText[i].offsetLeft) {
                console.log(marquee.clientWidth)
                console.log(marqueeText[i].style.left)
                console.log(marqueeText[i].offsetLeft)
                marqueeText[i].remove();
            }
        }
    }, 100)
    }); 
}
function stop(){
    console.log("stopped")
}

marquee1()

