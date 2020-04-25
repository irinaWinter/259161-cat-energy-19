var example = document.querySelector('.example');
var image_before = document.querySelector('.slider__img--before');
var image_after = document.querySelector('.slider__img--after');
var button_before = document.querySelector('.slider__button--before');
var button_after = document.querySelector('.slider__button--after');
var scale_value = document.querySelector('.scale__value');
var scale = document.querySelector('.scale');
var afterActive = false;

function showBefore() {
  if (afterActive) {
    image_before.classList.toggle('hidden');
    image_after.classList.toggle('hidden');
    scale_value.classList.toggle('scale__value--show-after');
    example.classList.toggle('example--show-after');
    afterActive = false;
  }
}

function showAfter() {
  if (!afterActive) {
    image_before.classList.toggle('hidden');
    image_after.classList.toggle('hidden');
    scale_value.classList.toggle('scale__value--show-after');
    example.classList.toggle('example--show-after');
    afterActive = true;
  }
}

function switchState() {
  (afterActive) ? showBefore() : showAfter();
}

button_before.addEventListener('click', showBefore);
button_after.addEventListener('click', showAfter);

scale.addEventListener('click', switchState);
