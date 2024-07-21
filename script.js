
var timer1 = document.querySelector("#counter")
var tl= gsap.timeline();


tl.from(".part1, .line h1",{
    opacity:0,
    duration:1,
    y:100,
    stagger:0.8,
    onStart: function(){
        var grow = 0;
var int = setInterval(function(){
if (grow < 100){
timer1.textContent = grow++
}
else{
    clearInterval(int);
    timer1.textContent= grow;
}
},25)
    }

})

tl.to(".line h2",{
    opacity:1,
    animationName:"anime",
    

})
tl.to(".loader",{
    opacity:0,
    delay:2,
    
})
