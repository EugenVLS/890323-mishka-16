    var header = document.querySelector('.header');
    var navToggle = document.querySelector('.header__toggle');
    var orderBtn = document.querySelector('.product__order-link');
    var modalSize = document.querySelector('.modal-size');
    var overlay = document.querySelector('.overlay');
    var addBtn = document.querySelectorAll('.btn-add');
    var basket = document.querySelectorAll('.catalog-icon');
    header.classList.remove('header--nojs');

    navToggle.addEventListener('click', function () {
      if (header.classList.contains('header--closed')) {
        header.classList.remove('header--closed');
        header.classList.add('header--opened');
      } else {
        header.classList.add('header--closed');
        header.classList.remove('header--opened');
      }
    });
    for (var i = 0; i < addBtn.length; i++) {
      addBtn[i].addEventListener('click', function () {
        modalSize.classList.remove('show');
        overlay.classList.remove('modal-open');
      });
    }
    for (var i = 0; i < basket.length; i++) {
      basket[i].addEventListener('click', function () {
        modalSize.classList.add('show');
        overlay.classList.add('modal-open');
      });
    }
    orderBtn.addEventListener('click', function () {
      modalSize.classList.add('show');
      overlay.classList.add('modal-open');
    });
    ymaps.ready(function () {
      var map = new ymaps.Map("map", {
        center: [59.938631, 30.323055],
        zoom: 17
      });
      pointer = new ymaps.Placemark([59.938631, 30.323055], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/icon-map-pin.svg',
        iconImageSize: [66, 101],
        iconOffset: [-33, -50.5]
      });
      map.geoObjects.add(pointer);
    });
