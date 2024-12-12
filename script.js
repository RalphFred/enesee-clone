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
  duration: 0.8,
  delay: 2,
});

//Hero title
gsap.from("#hero-text", {
  y: 250,
  skewY: 15,
  duration: 0.8,
  stagger: 0.1,
  delay: 2.4,
});

gsap.from("#hero-button", {
  y: 250,
  duration: 0.8,
  delay: 3.4,
});

const heroTextElement = document.querySelector(".hero-text");
const heroText = "Unleash Your Web3 Startup's Potential with Tailored Community and Design Solutions";
const heroTextArr = heroText.split("");

console.log(heroTextArr.length)

generateHeroText(heroTextArr);

function generateHeroText(heroText) {
  heroText.forEach((data) => {
    const span = document.createElement("span");
    span.classList.add("char");
    span.innerHTML = data;
    heroTextElement.appendChild(span);
  });
}

gsap.from(".char", {
  y: 250,
  opacity: 0,
  stagger: 0.018,
  delay: 2.4,
})

//MARQUEE
let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap.to(".marquee", {
  xPercent: -100,
  repeat: -1,
  duration: 20,
  ease: "linear",
});

gsap.set(".marquee", { xPercent: -50 });

setInterval(() => {
  isScrollingDown = !isScrollingDown;
  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1,
  });
}, 8000);

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;

  if (scrollY > currentScroll) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }

  currentScroll = scrollY;

  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1,
  });
});

//Slider

let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  gsap.to(".slide", {
    x: -1200,
    scrollTrigger: {
      trigger: ".slider",
      start: 'top bottom',
      scrub: true,
    }
  })
})

