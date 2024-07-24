


function loader(){

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
    tl.from(".hero h1",{
     y:400,
     stagger: 0.2
    })
    



}

 function cursorAnimate() {

    
    var crsr = document.querySelector(".cursor");
    
    document.addEventListener('mousemove', function(dets){
        
        gsap.to(".cursor",{
            top: dets.y-10,
            left:dets.x-10
        })
        
        
        
    });
    
    Shery.makeMagnet(".menu h2" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
}
   
 
loader();
cursorAnimate();

