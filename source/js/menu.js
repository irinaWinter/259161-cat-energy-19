var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".main-nav");

hamburger.classList.remove("hamburger--nojs");
menu.classList.remove("main-nav--nojs");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("hamburger--close");
  menu.classList.toggle("main-nav--opened");
});
