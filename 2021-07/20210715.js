var marquee = document.querySelector(".marquee");
marqueeInput.addEventListener("keyup", function(){
    marqueeTest.innerHTML = "";
    // var marquee = document.createElement("div");
    // marquee.setAttribute("class", "marquee");
    marqueeTest.append(marquee);
    var marqueeTextDiv = document.createElement("div");
    marqueeTextDiv.setAttribute("class", "marquee_text_elem");
    var marqueeText = document.createElement("p");
    var marqueeInput = document.querySelector("#marqueeInput");
    var marqueeInputText = marqueeInput.value;
    console.log(marqueeInputText)
    // marqueeText.textContent = marqueeInput.value;
    marqueeText.textContent = "1234567890";
    marquee.append(marqueeTextDiv)
    marqueeTextDiv.append(marqueeText)
    var marqueeTextWidth = marqueeText.clientWidth
    var marqueeWidt = screen.width/marqueeText.clientWidth
    console.log(marqueeTextWidth)
    console.log(screen.width)
    console.log(marqueeWidt)
    for(i = 0; i < marqueeWidt; i++) {
        // var marquee = document.createElement("div");
        // marquee.setAttribute("class","marquee");
        // marqueeTest.append(marquee);
        var marqueeTextDiv = document.createElement("div");
        marqueeTextDiv.setAttribute("class", "marquee_text_elem");
        var marqueeText = document.createElement("p");
        marqueeText.textContent = "1234567890";
        var marqueeInput = document.querySelector("#marqueeInput");
        marqueeTextDiv.style.right = i * (marqueeTextWidth + 20) + "px"
        marquee.append(marqueeTextDiv)
        marqueeTextDiv.append(marqueeText)
    
        
    }
})