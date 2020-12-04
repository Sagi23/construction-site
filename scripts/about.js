const qs = document.querySelectorAll(".qa");

qs.forEach((q) =>
  q.addEventListener("click", function () {
    q.classList.toggle("hide");
    q.classList.toggle("rotate");
  })
);
