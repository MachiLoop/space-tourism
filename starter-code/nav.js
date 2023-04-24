const navigationEl = document.querySelector("nav");
const navBtn = document.querySelector(".hamburger");

navBtn.addEventListener("click", function () {
  let visibility = navigationEl.getAttribute("data-visible");

  if (visibility == "false") {
    navigationEl.setAttribute("data-visible", "true");
    navBtn.firstElementChild.src = "assets/shared/icon-close.svg";
  } else {
    navigationEl.setAttribute("data-visible", "false");
    navBtn.firstElementChild.src = "assets/shared/icon-hamburger.svg";
  }
});
