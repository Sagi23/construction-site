const imgSlides = [];
imgSlides[0] = "/static/slider2.jpg";
imgSlides[1] = "/static/slider1.jpg";
imgSlides[2] = "/static/slider3.jpg";
const rightBtn = document.querySelector("#right-arrow");
const leftBtn = document.querySelector("#left-arrow");
const btn = document.querySelector("#btn");
let imgSlider = document.querySelector(".slides");

rightBtn.addEventListener("click", function () {
  if (imgSlider.src.match(imgSlides[0])) {
    imgSlider.src = imgSlides[1];
  } else if (imgSlider.src.match(imgSlides[1])) {
    imgSlider.src = imgSlides[2];
  } else if (imgSlider.src.match(imgSlides[2])) {
    imgSlider.src = imgSlides[0];
  }
});
leftBtn.addEventListener("click", function () {
  if (imgSlider.src.match(imgSlides[0])) {
    imgSlider.src = imgSlides[2];
  } else if (imgSlider.src.match(imgSlides[1])) {
    imgSlider.src = imgSlides[0];
  } else if (imgSlider.src.match(imgSlides[2])) {
    imgSlider.src = imgSlides[1];
  }
});

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
