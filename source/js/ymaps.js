ymaps.ready(function () {
  var imageSize = [62, 53];
  var imageOffset = [-31, -53];
  var center = [59.938635, 30.323118];

  if (document.documentElement.clientWidth > 768) {
    imageSize = [124, 106];
    imageOffset = [-62, -106];
  }

  if (document.documentElement.clientWidth > 1300) {
    center = [59.938802, 30.319973];
  }

  var myMap = new ymaps.Map("map", {
    center: center,
    zoom: 17
  }, {
    searchControlProvider: "yandex#search"
  }),

  // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    "<div style='color: #FFFFFF; font-weight: bold;'>$[properties.iconContent]</div>"
  ),

  myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
    hintContent: "ул. Большая Конюшенная, д. 19/8 Санкт-Петербург",
    balloonContent: "Это красивая метка"
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: "default#image",
    // Своё изображение иконки метки.
    iconImageHref: "img/map-pin.png",
    // Размеры метки.
    iconImageSize: imageSize,
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: imageOffset
  });

  myMap.geoObjects.add(myPlacemark)
});
