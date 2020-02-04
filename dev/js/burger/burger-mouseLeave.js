/* =================================================
    Burger to RIGHT ARROW animation
================================================= */
var tlXToRightArrow = gsap.timeline({paused:true});
tlXToRightArrow.to("#top-line",{duration:burgerSpeed, scaleX:.7, rotate:0},"start")
.to("#bottom-line",{duration:burgerSpeed, scaleX:.7, rotate:0},"start")
// form arrows
.to("#arrow-left-top",{duration:burgerSpeed, alpha:1, rotate:0},"arrow")
.to("#arrow-left-bottom",{duration:burgerSpeed, alpha:1, rotate:0},"arrow");


/* =================================================
    MOUSE LEAVE function for the burger
================================================= */
$('#burger-container').on("mouseleave",function(){
    // console.log("mouse leave");
    if(navigationIsOpen === false){
        console.log("is open false mouseLeave");
        //tlBugerToLeftArrow.invalidate().restart();
        tlBugerToLeftArrow.reverse();
    }else{
        console.log("is open true mouseLeave");
        //tlXToRightArrow.invalidate().restart();
        tlXToRightArrow.reverse();
    }
});
