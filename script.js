function addSwipeEvent(DOM, NamaEvent, handleEvent) {
    var start=0, finish=0;

    DOM.addEventListener('touchstart', function(e){
        switch (NamaEvent) {
            case "swipeDown" | "swipeUp":
                start = e.targetTouches[0].clientY;
                break;
            default:
                start = e.targetTouches[0].clientY;
                break;
        }
    }, false);

    DOM.addEventListener('mousedown', function(e){
        switch (NamaEvent) {
            case "swipeDown" | "swipeUp":
                start = e.clientY;
                break;
            default:
                start = e.clientY;
                break;
        }
    }, false);

    DOM.addEventListener('touchmove', function(e){
        e.preventDefault();
    }, false)

    DOM.addEventListener('mousemove', function(e){
        e.preventDefault();
    }, false)

    DOM.addEventListener('touchend', function(e){
        switch (NamaEvent) {
            case "swipeDown" | "swipeUp":
                finish = e.changedTouches[0].clientY;
                break;
            default:
                finish = e.changedTouches[0].clientY;
                break;
        }

        var GantiValue = finish-start;
        var ABSGantiValue = Math.abs(GantiValue);
        // swipeUp
        if (GantiValue<0 && ABSGantiValue>30 && NamaEvent=="swipeUp") {
            console.log("swipeUp");
            handleEvent();
        }
        // swipeDown
        if (GantiValue>0 && ABSGantiValue>30 && NamaEvent=="swipeDown") {
            console.log("swipeDown");
            handleEvent();
        }
    }, false);

    DOM.addEventListener('mouseup', function(e){
        switch (NamaEvent) {
            case "swipeDown" | "swipeUp":
                finish = e.clientY;
                break;
            default:
                finish = e.clientY;
                break;
        }

        var GantiValue = finish-start;
        var ABSGantiValue = Math.abs(GantiValue);
        // swipeUp
        if (GantiValue<0 && ABSGantiValue>30 && NamaEvent=="swipeUp") {
            console.log("swipeUp");
            handleEvent();
        }
        // swipeDown
        if (GantiValue>0 && ABSGantiValue>30 && NamaEvent=="swipeDown") {
            console.log("swipeDown");
            handleEvent();
        }
    }, false);
}

var cover = document.querySelector('.thecover');
 
addSwipeEvent(cover, "swipeUp", function(){
    cover.classList.remove("active");
    a1.classList.add("active");
});

addSwipeEvent(a1, "swipeUp", function(){
    a1.classList.remove("active");
    a2.classList.add("active");
});

addSwipeEvent(a2, "swipeUp", function(){
    a2.classList.remove("active");
    a3.classList.add("active");
});

addSwipeEvent(a3, "swipeUp", function(){
    a3.classList.remove("active");
    a4.classList.add("active");
});

addSwipeEvent(a4, "swipeUp", function(){
    a4.classList.remove("active");
    a5.classList.add("active");
});

addSwipeEvent(a5, "swipeUp", function(){
    a5.classList.remove("active");
    a6.classList.add("active");
});

addSwipeEvent(a6, "swipeUp", function(){
    a6.classList.remove("active");
    a7.classList.add("active");
});

addSwipeEvent(a7, "swipeUp", function(){
    a7.classList.remove("active");
    a8.classList.add("active");
});

addSwipeEvent(a8, "swipeUp", function(){
    a8.classList.remove("active");
    a9.classList.add("active");
});

addSwipeEvent(a9, "swipeUp", function(){
    a9.classList.remove("active");
    a10.classList.add("active");
});

addSwipeEvent(a10, "swipeUp", function(){
    a10.classList.remove("active");
    a11.classList.add("active");
});
//---
addSwipeEvent(a10, "swipeDown", function(){
    a9.classList.add("active");
    a10.classList.remove("active");
});

addSwipeEvent(a9, "swipeDown", function(){
    a8.classList.add("active");
    a9.classList.remove("active");
});

addSwipeEvent(a8, "swipeDown", function(){
    a7.classList.add("active");
    a8.classList.remove("active");
});

addSwipeEvent(a7, "swipeDown", function(){
    a6.classList.add("active");
    a7.classList.remove("active");
});

addSwipeEvent(a6, "swipeDown", function(){
    a5.classList.add("active");
    a6.classList.remove("active");
});

addSwipeEvent(a5, "swipeDown", function(){
    a4.classList.add("active");
    a5.classList.remove("active");
});

addSwipeEvent(a4, "swipeDown", function(){
    a3.classList.add("active");
    a4.classList.remove("active");
});

addSwipeEvent(a3, "swipeDown", function(){
    a2.classList.add("active");
    a3.classList.remove("active");
});

addSwipeEvent(a2, "swipeDown", function(){
    a1.classList.add("active");
    a2.classList.remove("active");
});

addSwipeEvent(a1, "swipeDown", function(){
    cover.classList.add("active");
    a1.classList.remove("active");
});

//--------------------//
var cover2 = document.querySelector('.thecover2');

addSwipeEvent(cover2, "swipeUp", function(){
    cover2.classList.remove("active");
    b1.classList.add("active");
});

addSwipeEvent(b1, "swipeUp", function(){
    b1.classList.remove("active");
    b2.classList.add("active");
});

addSwipeEvent(b2, "swipeUp", function(){
    b2.classList.remove("active");
    b3.classList.add("active");
});

addSwipeEvent(b3, "swipeUp", function(){
    b3.classList.remove("active");
    b4.classList.add("active");
});

addSwipeEvent(b4, "swipeUp", function(){
    b4.classList.remove("active");
    b5.classList.add("active");
});

addSwipeEvent(b5, "swipeUp", function(){
    b5.classList.remove("active");
    b6.classList.add("active");
});

addSwipeEvent(b6, "swipeUp", function(){
    b6.classList.remove("active");
    b7.classList.add("active");
});

addSwipeEvent(b7, "swipeUp", function(){
     b7.classList.remove("active");
    b8.classList.add("active");
});

addSwipeEvent(b8, "swipeUp", function(){
    b8.classList.remove("active");
    b9.classList.add("active");
});

addSwipeEvent(b9, "swipeUp", function(){
    b9.classList.remove("active");
    b10.classList.add("active");
});

addSwipeEvent(b10, "swipeUp", function(){
    b10.classList.remove("active");
    b11.classList.add("active");
});
//---
addSwipeEvent(b10, "swipeDown", function(){
    b9.classList.add("active");
    b10.classList.remove("active");
});

addSwipeEvent(b9, "swipeDown", function(){
    b8.classList.add("active");
    b9.classList.remove("active");
});

addSwipeEvent(b8, "swipeDown", function(){
    b7.classList.add("active");
    b8.classList.remove("active");
});

addSwipeEvent(b7, "swipeDown", function(){
    b6.classList.add("active");
    b7.classList.remove("active");
});

addSwipeEvent(b6, "swipeDown", function(){
    b5.classList.add("active");
    b6.classList.remove("active");
});

addSwipeEvent(b5, "swipeDown", function(){
    b4.classList.add("active");
    b5.classList.remove("active");
});

addSwipeEvent(b4, "swipeDown", function(){
    b3.classList.add("active");
    b4.classList.remove("active");
});

addSwipeEvent(b3, "swipeDown", function(){
    b2.classList.add("active");
    b3.classList.remove("active");
});

addSwipeEvent(b2, "swipeDown", function(){
    b1.classList.add("active");
    b2.classList.remove("active");
});

addSwipeEvent(b1, "swipeDown", function(){
    cover2.classList.add("active");
    b1.classList.remove("active");
});