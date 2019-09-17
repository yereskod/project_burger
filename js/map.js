ymaps.ready(init);
var placemarks = [
  { 
    latitude: 59.89899884,
    longitude: 30.48452600,
    hintContent: '<div class="map__hint">Mr. Burger на Дыбенко</div>',
    balloonContent: 'С шавермой с окраин сложно тягаться, но мы в себе уверены. Заходите: Ул. Крыленко д.31',
  },
  {
    latitude: 59.93572476,
    longitude: 30.32163087,
    hintContent: '<div class="map__hint">Mr. Burger в Центре</div>',
    balloonContent: 'Новая достопримечательность в самом центре Северной Столицы. Ждём вас: Невский проспект д. 19',
  },
  {
    latitude: 59.96527645,
    longitude: 30.31072252,
    hintContent: '<div class="map__hint">Mr. Burger на Петроградке</div>',
    balloonContent: 'Большие бургеры на Большом. А ещё они самые вкусные. Не проходите мимо: Большой проспект ПС д. 92',
  },
];

function init() {
  var map = new ymaps.Map('map', {
    center: [59.95005802, 30.31781392],
    zoom: 12,
    controls: ['zoomControl'],
    behaviors: ['drag']
  });
  
  placemarks.forEach(function (obj) {
    var placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
      hintContent: [obj.hintContent],
      balloonContent: [obj.balloonContent],
    },
      {
        iconLayout: 'default#image',
        iconImageHref: './svg/map-marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
      });
    map.geoObjects.add(placemark);
  });
}