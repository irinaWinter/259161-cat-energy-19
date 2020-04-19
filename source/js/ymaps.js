ymaps.ready(function () {
  var piter_map = new ymaps.Map('map', {
    center: [59.938572, 30.320009],
    zoom: 17
  }),


  // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemark = new ymaps.Placemark(piter_map.getCenter(), {
    hintContent: 'ул. Большая Конюшенная, д. 19/8 Санкт-Петербург',
  }, {

    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: '../img/map-pin.png',
    // Размеры метки.
    iconImageSize: [113, 95],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -60]
  });

  piter_map.geoObjects.add(myPlacemark)
});
