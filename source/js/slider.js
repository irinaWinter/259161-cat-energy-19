let image_before = document.querySelector('.slider__img--before');
let button_before = document.querySelector('.slider__button--before');
let button_after = document.querySelector('.slider__button--after');
let scale = document.querySelector('.scale');
let scale_value = document.querySelector('.scale__value');
let afterActive = false;

function showBefore() {
  if (afterActive) {
    image_before.style.zIndex = 1;
    scale_value.style.right = 'auto';
    scale_value.style.left = 0;
    afterActive = false;
  }
}

function showAfter() {
  if (!afterActive) {
    image_before.style.zIndex = 0;
    scale_value.style.left = 'auto';
    scale_value.style.right = 0;
    afterActive = true;
  }
}

function switchState() {
  (afterActive) ? showBefore() : showAfter();
}

button_before.addEventListener('click', showBefore);
button_after.addEventListener('click', showAfter);

scale.addEventListener('click', switchState);
