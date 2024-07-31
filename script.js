function scrollAnime(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

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
     stagger: 0.2,
     duration:1
    })
    



}

 function cursorAnimate() {

    
    var crsr = document.querySelector(".cursor");
    
    Shery.mouseFollower({
      // skew: true,
      // ease: "cubic-bezier(0.23, 2, 0.320, 2)",
      duration: 1,
    });
      
    Shery.makeMagnet(".menu h2" /* Element to target.*/, {
      skew: true,
      // ease: "cubic-bezier(0.23, 2, 0.320, 2)",
      duration: 1,
    });
   

    var videoContainer = document.querySelector(".videocont");
  var video = document.querySelector(".videocont video")
  videoContainer.addEventListener("mouseenter", function () {
    videoContainer.addEventListener("mousemove", function (dets) {
      gsap.to(".mousefollower", {
        opacity: 0
      });
      gsap.to(".video-cursor",{
        top: dets.pageY-200 + "px",
        left: dets.pageX-400+ "px"
      })

 
    });
  });
  videoContainer.addEventListener("mouseleave", function () {
    gsap.to(".mousefollower", {
      opacity: 1
   
    });

    gsap.to(".video-cursor", {
      left: "70%",
      top: "-1%",
    });

  });



  var flag = 0
  videoContainer.addEventListener("click", function () {
    if (flag == 0) {
      video.play()
      document.querySelector(".background-im").style.opacity = 0;
      video.style.opacity = 1
      document.querySelector(".video-cursor").innerHTML = `<i class="ri-pause-mini-fill"></i>`
      gsap.to(".video-cursor", {
        scale: 0.5
      })
      flag = 1
    } else {
      video.pause()
      video.style.opacity = 0
      document.querySelector(".background-im").style.opacity = 1;
      document.querySelector(".video-cursor").innerHTML = `<i class="ri-play-mini-fill"></i>`
      gsap.to(".video-cursor", {
        scale: 1
      })
      flag = 0
    }
  })
    
}
   
function sheryAnimation(){
  Shery.imageEffect(".image-div",{
    style:5,
   config:{"a":{"value":3.21,"range":[0,30]},"b":{"value":-0.28,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7241195864976497},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.55,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.84,"range":[0,10]},"metaball":{"value":0.63,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.21,"range":[0,2]},"noise_scale":{"value":32.06,"range":[0,100]}},
    gooey :true,
    

  })
}

function cursor2(){
  var crsr2 = document.querySelector(".page1 img")
  var hero = document.querySelector("#hero3")

  hero.addEventListener("mouseenter",function(){
    hero.addEventListener("mousemove",function(dets){
      gsap.to(".mousefollower",{
        opacity:0,
      })
gsap.to(".page1 img",{
  opacity:1,
  top:dets.pageY+ "px",
  left:dets.pageX+ "px",

})

    })
    hero.addEventListener("mouseleave",function(){
      gsap.to(".page1 img",{
        opacity:0,
      })
      gsap.to(".mousefollower",{
        opacity:1,
      })
      
    })

  })

}

cursor2();

loader();
scrollAnime();
cursorAnimate();

sheryAnimation();