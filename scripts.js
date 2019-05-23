ymaps.ready(init);

function init() {
  var map = new ymaps.Map("map", {
    center: [62.10565, 42.899612],
    zoom: 15,
    controls: []
  }, {
    yandexMapDisablePoiInteractivity: true,
    suppressMapOpenBlock: true,
  });

  var placemark = new ymaps.Placemark(map.getCenter(), {
    // Зададим содержимое заголовка балуна.
    // balloonContentHeader: '<a href = "#">Рога и копыта</a><br>' +
    //    '<span class="description">Сеть кинотеатров</span>',
    // Зададим содержимое основной части балуна.
    // balloonContentBody: '<img src="img/cinema.jpg" height="150" width="200"> <br/> ' +
    //    '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
    //    '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
    // Зададим содержимое нижней части балуна.
    // balloonContentFooter: 'Информация предоставлена:<br/>OOO "Рога и копыта"',
    // Зададим содержимое всплывающей подсказки.
    hintContent: 'Рога и копыта'
  });

  var museum = new ymaps.Placemark([62.103139, 42.900937], {
    balloonContentHeader: `
      <div>Шенкурский районный Краеведческий музей</div>
    `
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/museum.png",
    iconImageSize: [60, 60],
    iconImageOffset: [-30, -30]
  });
  // Добавим метку на карту.
  map.geoObjects.add(placemark);
  map.geoObjects.add(museum);

  var church1 = new ymaps.Placemark([62.103644, 42.904628], {
    balloonContentHeader: `
      <div>Троицкий Шенкурский женский монастырь</div>
    `
  }, {
    iconLayout: "default#image",
    iconImageHref: "images/church.png",
    iconImageSize: [60, 60],
    iconImageOffset: [-30, -30]
  });
  map.geoObjects.add(church1);
  // Откроем балун на метке.
  // placemark.balloon.open();
}
