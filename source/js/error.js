let form = document.querySelector('.program__form');

// Обязательные для заполнения поля
let nameField = form.querySelector('[name=name]');
let weightField = form.querySelector('[name=weight]');
let emailField = form.querySelector('[name=email]');
let phoneNumberField = form.querySelector('[name=telephone]');

let fields = [nameField, weightField, emailField, phoneNumberField];
let firstRequiredField;

function removeErrorClass(element) {
  if (element.value) {
    element.classList.remove('program__input--error');
  }
}

function checkForm(evt) {
  for (let field of fields) {
    evt.preventDefault();

    if (!field.value) {
      // Определяем перевое обязательное незаполненное поле
      if (!firstRequiredField) {
        firstRequiredField = field;
      }

      // Добавляем класс ошибки пустым обязательным полям
      field.classList.add('program__input--error');

    } else {
      // Удяляем класс ошибки у заполненных обязательных полей
      field.classList.remove('program__input--error');
    }
  }
  // Устанавливаем фокус на первом обязательном незаполненном поле
  firstRequiredField.focus();
  firstRequiredField = undefined;
}

form.addEventListener('submit', checkForm);
fields.forEach(function(item, i) {
  if (item !== weightField) {
    item.addEventListener('keydown', function() {
      removeErrorClass(item);
    });
  } else {
    item.addEventListener('change', function() {
      removeErrorClass(item);
    });
  }
});
