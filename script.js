// Initalize Lenis
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// REGISTER SCROLLTRIGGER & CUSTOM EASE PLUGIN
gsap.registerPlugin(SplitText);


// HEADER SECTION

// Navigation
const navigation = document.querySelector('.navigation');
