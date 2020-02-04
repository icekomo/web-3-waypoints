// create a timeline for the background animations and pause it on creation
var tlNavAnimation = gsap.timeline({paused:true});
tlNavAnimation.from('nav ul li',{duration:0.25,x:100,stagger:0.15, alpha:0, delay:0.25, color:"#FF00EB"});

function animateNavigation(){
    if(navigationIsOpen === false){
        tlNavAnimation.play();
    }
    else{
        tlNavAnimation.reverse();
    }
}
