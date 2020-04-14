let example = document.querySelector('.example');
let image_before = document.querySelector('.slider__img--before');
let image_after = document.querySelector('.slider__img--after');
let button_before = document.querySelector('.slider__button--before');
let button_after = document.querySelector('.slider__button--after');
let scale = document.querySelector('.scale');
let scale_value = document.querySelector('.scale__value');
let afterActive = false;

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
