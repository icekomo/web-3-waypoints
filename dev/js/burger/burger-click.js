/* =================================================
    Burger to X animation
================================================= */
var leftArrowToX = gsap.timeline({paused:true});
leftArrowToX.to("#burger-container",{duration:0.5, rotate:-180},"start")
.to("#top-line",{duration:burgerSpeed, scaleX:.7, rotate:45, y:8},"start")
.to("#middle-line",{duration:burgerSpeed, scale:0},"start")
.to("#bottom-line",{duration:burgerSpeed, scaleX:.7, rotate:-45, y:-8},"start")
// remove arrows
.to("#arrow-left-top",{duration:burgerSpeed, alpha:0, rotate:30},"start")
.to("#arrow-left-bottom",{duration:burgerSpeed, alpha:0, rotate:-30},"start");

var rightArrowToBurger = gsap.timeline({paused:true});
rightArrowToBurger.to("#burger-container",{duration:0.5, rotate:0},"start")
.to("#top-line",{duration:burgerSpeed, scaleX:1, rotate:0, y:0},"start")
.to("#middle-line",{duration:burgerSpeed, scale:1},"start")
.to("#bottom-line",{duration:burgerSpeed, scaleX:1, rotate:0, y:0},"start")
// remove arrows
.to("#arrow-left-top",{duration:burgerSpeed, alpha:0, rotate:30},"start")
.to("#arrow-left-bottom",{duration:burgerSpeed, alpha:0, rotate:-30},"start");


/* =================================================
    CLICK function for the burger
================================================= */
$('#burger-container').on("click", burgerClicked);

function burgerClicked(){
    console.log("burger click now");

    // you can see the nav, so you have to attach the class so that you can see it before you try to animate it
    $("nav").addClass("show-nav");

    if(navigationIsOpen === false){
        leftArrowToX.invalidate().restart();
        leftArrowToX.play();
        // call that background animation funciton
        animateNavbackground();
        // reset the var to true, since the naviagion is now open
        navigationIsOpen = true;
    }else{
        console.log("back to burger after click");
        rightArrowToBurger.invalidate().restart();
        rightArrowToBurger.play();
        // call that background animation funciton
        animateNavbackground();
        // set the var back to false, since the naviagion is now closed
        navigationIsOpen = false;
    }
}
