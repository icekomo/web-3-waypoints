/* =================================================
    Burger to LEFT ARROW animation
================================================= */
var tlBugerToLeftArrow = gsap.timeline({paused:true});
tlBugerToLeftArrow.to("#top-line",{duration:burgerSpeed, y:8},"start")
.to("#bottom-line",{duration:burgerSpeed, y:-8},"start")
// scale down all the lines
.to(".lines",{duration:burgerSpeed, scaleX:.7},"arrow")
// form arrows
.to("#arrow-left-top",{duration:burgerSpeed, alpha:1, rotate:0},"arrow")
.to("#arrow-left-bottom",{duration:burgerSpeed, alpha:1, rotate:0},"arrow")

/* =================================================
    MOUSE ENTER function for the burger
================================================= */
$('#burger-container').on("mouseenter",function(){
    // console.log("mouse enter");
    if(navigationIsOpen === false){
        console.log("is open false mouseEnter");
        tlBugerToLeftArrow.invalidate().restart();
        tlBugerToLeftArrow.play();
    }else{
        console.log("is open true");
        tlXToRightArrow.invalidate().restart();
        tlXToRightArrow.play();
    }
});
