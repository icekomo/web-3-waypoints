
// set up the tansform origins for the burger lines
gsap.set(".lines",{transformOrigin: "50% 50%"});

// set up the left arrow
gsap.set("#arrow-left-top",{transformOrigin: "0% 50%", rotate: 30, alpha:0});
gsap.set("#arrow-left-bottom",{transformOrigin: "0% 50%", rotate: -30, alpha:0});

// var to tell me if the menu is visible or not
var navigationIsOpen = false;
// speed for burger animations ( mouseEnter mouseLeave)
var burgerSpeed = 0.15;

// function to make sure the arrows are reset back to their starting values
function defaultValuesForBurger(){
    gsap.set("#arrow-left-top",{transformOrigin: "0% 50%", rotate: 30, alpha:0});
    gsap.set("#arrow-left-bottom",{transformOrigin: "0% 50%", rotate: -30, alpha:0});
}
