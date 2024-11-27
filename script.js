// Initalize Lenis
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// REGISTER SCROLLTRIGGER

console.log(gsap);

gsap.registerPlugin(ScrollTrigger, TextPlugin);

console.log(ScrollTrigger);

// HEADER SECTION

// Navigation
const navigation = document.querySelector("#navigation");

gsap.to("#navigation", {
  top: 0,
  duration: 1,
  delay: 2,
});

//Hero title

// const heroAnimation = gsap.timeline({
//   ScrollTrigger: {
//     trigger: '#w'
//   }
// })
gsap.from("#hero-text", {
  y: 200,
  skewY: 15,
  duration: 0.8,
  stagger: 0.1,
  delay: 2,
});
