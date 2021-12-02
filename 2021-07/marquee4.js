

var marquee = document.querySelector("#marquee");
var marqueeInput = document.querySelector("#marqueeInput");
var marqueeInputText = marqueeInput.value;

function marquee1() {
    var marqueeText = document.createElement("p")
    marqueeText.setAttribute("id", "power1")
    marqueeText.setAttribute("class", "power")
    marqueeText.textContent = "Marquee banner text"
    marquee.append(marqueeText)
    marqueeText.style.transform = -marqueeText.offsetWidth;
    timer(marqueeText)
}

function timer(marqueeText) {
    var marqueeTimer = setInterval(function() {
        marqueeText = document.querySelectorAll("#power1")
            var aa = 0;
            for(i=0; i < marqueeText.length; i++){
                marqueeText[i].style.transform = "translateX(" + i +"px)";
            if(20 === marqueeText[i].offsetLeft){
                clearInterval(marqueeTimer)
                marquee1()
            }

            if(marquee.clientWidth + marqueeText[i].offsetWidth < marqueeText[i].offsetLeft) {
                console.log(marquee.clientWidth)
                console.log(marqueeText[i].style.left)
                console.log(marqueeText[i].offsetLeft)
                marqueeText[i].remove();
            }
        }
    }, 10); 
}
function stop(){
    console.log("stopped")
}

marquee1()

