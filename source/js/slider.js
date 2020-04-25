var example = document.querySelector(".example");
var imageBefore = document.querySelector(".slider__img--before");
var imageAfter = document.querySelector(".slider__img--after");
var buttonBefore = document.querySelector(".slider__button--before");
var buttonAfter = document.querySelector(".slider__button--after");
var scaleValue = document.querySelector(".scale__value");
var scale = document.querySelector(".scale");
var afterActive = false;

function showBefore() {
  if (afterActive) {
    imageBefore.classList.toggle("hidden");
    imageAfter.classList.toggle("hidden");
    scaleValue.classList.toggle("scale__value--show-after");
    example.classList.toggle("example--show-after");
    afterActive = false;
  }
}

function showAfter() {
  if (!afterActive) {
    imageBefore.classList.toggle("hidden");
    imageAfter.classList.toggle("hidden");
    scaleValue.classList.toggle("scale__value--show-after");
    example.classList.toggle("example--show-after");
    afterActive = true;
  }
}

function switchState() {
  (afterActive) ? showBefore() : showAfter();
}

buttonBefore.addEventListener("click", showBefore);
buttonAfter.addEventListener("click", showAfter);

scale.addEventListener("click", switchState);
