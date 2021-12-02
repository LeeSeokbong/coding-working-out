var marquee = document.querySelector("#marquee");
var marqueeInput = document.querySelector("#marqueeInput");
var marqueeInputText = marqueeInput.value;

function marquee1() {
    var marqueeText = document.createElement("p")
    marqueeText.setAttribute("class", "power")
    marqueeText.textContent = "0123456789"
    marquee.append(marqueeText)
    console.log(marquee.childElementCount)
    var marqueeCount = marquee.offsetWidth / marqueeText.offsetWidth
    console.log(marquee.offsetWidth)
    console.log(marqueeCount)

    // for(i = 0; i < 2; i++) {
    //     var marqueeText = document.createElement("p")
    //     marqueeText.setAttribute("class", "power")
    //     marqueeText.setAttribute("id", "powerup")
    //     marqueeText.textContent = "0123456789"
    //     marquee.append(marqueeText)
    //     if(marqueeText.offsetLeft < marqueeText.offsetLeft + 20) {
    //     var marqueeNewText = document.querySelector(".power")
    //     if(marqueeNewText.offsetLeft + 20){
    //         var marqueeText = document.createElement("p")
    //         marqueeText.setAttribute("class", "power")
    //         marqueeText.setAttribute("id", "powerup")
    //         marqueeText.textContent = "0123456789"
    //     }
    // }

    setInterval(function() {
        for(i = 0; i < marqueeCount; i++) {
            marqueeText = document.querySelector(".power")
            marqueeText.style.left = marqueeText.offsetLeft + 1 + "px";
        
        if(marquee.clientWidth < marqueeText.offsetLeft) {
            marqueeText.remove();
            stop()
        }
    }}, 100)
}
    
function stop(){
    console.log("stopped")
    marquee1()
}


marquee1()
