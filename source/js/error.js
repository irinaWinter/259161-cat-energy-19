var form = document.querySelector(".program__form");

// Обязательные для заполнения поля
var nameField = form.querySelector("[name=name]");
var weightField = form.querySelector("[name=weight]");
var emailField = form.querySelector("[name=email]");
var phoneNumberField = form.querySelector("[name=telephone]");

var fields = [nameField, weightField, emailField, phoneNumberField];
var firstRequiredField;

function removeErrorClass(element) {
  if (element.value) {
    element.classList.remove("program__input--error");
  }
}

function checkForm(evt) {
  for (var i = 0; i < fields.length; i++) {
    evt.preventDefault();

    if (!fields[i].value) {
      // Определяем перевое обязательное незаполненное поле
      if (!firstRequiredField) {
        firstRequiredField = fields[i];
      }

      // Добавляем класс ошибки пустым обязательным полям
      fields[i].classList.add("program__input--error");

    } else {
      // Удяляем класс ошибки у заполненных обязательных полей
      fields[i].classList.remove("program__input--error");
    }
  }
  // Устанавливаем фокус на первом обязательном незаполненном поле
  firstRequiredField.focus();
  firstRequiredField = undefined;
}

form.addEventListener("submit", checkForm);
fields.forEach(function(item, i) {
  if (item !== weightField) {
    item.addEventListener("keydown", function() {
      removeErrorClass(item);
    });
  } else {
    item.addEventListener("change", function() {
      removeErrorClass(item);
    });
  }
});
