function firstpageanimation(){
  var tl = gsap.timeline();


gsap.from(" #nav ,#bottomtext #left h1",{
  y: -10,
  opacity: 0,
  duration: 2,
  ease: Expo.easeInOut
},"dof")

gsap.from("#bottomtext #right h1",{
  y: -10,
  opacity: 0,
  duration: 2.8,
  ease: Expo.easeInOut
},"dof")



tl.from(" .bon h2 ",{
  y: 200,
  // opacity: 0,
  duration: 1,
  // ease: Expo.easeInOut
},"do")

tl.from(" .bonn h1 ",{
    y: 200,
    duration: 1.1,
    // ease: Expo.easeInOut
  },"do")

  tl.from(" .bonn h3 ",{
    y: -10,
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut
  },"dof")
}
Shery.mouseFollower({
  //Parameters are optional.
  skew: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


Shery.imageMasker(".mask-target" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  text: "Shery",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


document.querySelectorAll(".section").forEach(function (elem) {

  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
   
    gsap.to(elem.querySelector("img"), {
    opacity: 0,
    ease: Power3,
    
    });
  });


  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clienty - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
    opacity: 1,
    ease: Power1,
    top: diff,
    left: dets.clientX,
    rotate: gsap.utils.clamp(-20,20, diffrot)
    });
  });
  });
  




// Initialize Lenis
const lenis = new Lenis({
  duration: 3.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Integrate Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);





firstpageanimation();
// Shery.textAnimate(".text-target" /* Element to target.*/, {
//     //Parameters are optional.
//     style: 1,
//     y: 10,
//     delay: 0.1,
//     duration: 2,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     multiplier: 0.1,
//   });