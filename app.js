gsap.registerPlugin(ScrollTrigger);

const tl1 = gsap.timeline();
tl1
  .from(".section1 h1 span:nth-child(1)", {
    x: -500,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  })
  .from(
    ".section1 h1 span:nth-child(2)",
    {
      x: 500,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    },
    "<"
  )
  .from(
    ".section1 p",
    {
      rotation: 90,
      transformOrigin: "left top",
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    },
    "-=0.5"
  )
  .from(
    ".section1 img",
    {
      y: 200,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    },
    "-=0.8"
  );

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "top 70%",
    end: "bottom 30%",
    toggleActions: "play none none reverse",
  },
});

tl2
  .from(".section2 h2 span", {
    y: "-100vh",
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
  })
  .from(
    ".section2 p",
    {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.3"
  );

const scrollTween = gsap.to(".horizontal-sections", {
  xPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-sections",
    pin: true,
    scrub: 1,
    end: "+=2000",
  },
});

gsap.set(".section3 p span", {
  backgroundColor: "white",
  color: "#2ecc71",
  padding: "2px 8px",
  borderRadius: "4px",
});

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    containerAnimation: scrollTween,
    start: "left 70%",
    end: "left 30%",
    toggleActions: "play none none reverse",
  },
});

tl3
  .from(".section3 h2", {
    x: -800,
    scale: 5,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  })
  .from(
    ".section3 p span",
    {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    },
    "-=0.5"
  );

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section4",
    containerAnimation: scrollTween,
    start: "left 70%",
    end: "left 30%",
    toggleActions: "play none none reverse",
  },
});

tl4.from(".section4 .portfolio-item", {
  x: 600,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
});

const contactTitle = document.querySelector(".section5 h2");
const text = contactTitle.innerText;
contactTitle.innerText = "";

text.split("").forEach((char) => {
  const span = document.createElement("span");
  span.innerText = char === " " ? "\u00A0" : char;
  contactTitle.appendChild(span);
});

gsap.set(".section5", {
  backgroundPosition: "200% 90%",
  backgroundColor: "#34495e",
});

const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "top top",
    end: "+=3000",
    scrub: 1,
    pin: true,
  },
});

tl5
  .from(".section5 h2 span", {
    y: "-100vh",
    opacity: 0,
    stagger: 0.05,
    duration: 2,
  })
  .from(
    ".section5 p",
    {
      y: 50,
      opacity: 0,
      duration: 1.5,
    },
    "-=1"
  )
  .from(
    ".section5 button",
    {
      scale: 0,
      opacity: 0,
      duration: 1.5,
    },
    "-=0.8"
  )
  .to(
    ".section5",
    {
      backgroundPosition: "90% 90%",
      backgroundColor: "black",
      duration: 2,
    },
    "-=1"
  );
