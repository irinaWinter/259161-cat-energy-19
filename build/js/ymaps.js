ymaps.ready(function(){var e=[62,53],t=[-31,-53],n=[59.938635,30.323118];768<document.documentElement.clientWidth&&(e=[124,106],t=[-62,-106]),1300<document.documentElement.clientWidth&&(n=[59.938802,30.319973]);var o=new ymaps.Map("map",{center:n,zoom:17},{searchControlProvider:"yandex#search"}),a=(ymaps.templateLayoutFactory.createClass("<div style='color: #FFFFFF; font-weight: bold;'>$[properties.iconContent]</div>"),new ymaps.Placemark([59.938635,30.323118],{hintContent:"ул. Большая Конюшенная, д. 19/8 Санкт-Петербург",balloonContent:"Это красивая метка"},{iconLayout:"default#image",iconImageHref:"img/map-pin.png",iconImageSize:e,iconImageOffset:t}));o.geoObjects.add(a)});