const btn = document.querySelector("#btn1");

gsap.from(".landing-left", { duration: 0.5, x: -100, opacity: 0 });
gsap.from(".landing-right", { duration: 0.5, x: 100, opacity: 0, delay: 0.5 });

let tl = new TimelineMax({ repeat: -1 })
  .from(".scroll", {
    duration: 2,
    ease: "linear",
    y: -30,
  })
  .to(".scroll", {
    duration: 2,
    ease: "linear",
    y: -30,
  });

btn.addEventListener("click", function (e) {
  e.preventDefault();
});
