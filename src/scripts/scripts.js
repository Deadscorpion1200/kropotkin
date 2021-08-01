// Слайдер
import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  touchRatio: 0.2,
  slideToClickedSlide: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: 
  {
    delay: 2000,
  },
});

const swiper1 = new Swiper('.page-actual-container', {
    direction: 'horizontal',
    loop: true,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: 
    {
      delay: 2000,
    },
    navigation: {
        nextEl: '.page-actual__next',
        prevEl: '.page-actual__prev',
    },
  });

// Адаптивная кнопка
let adMenu = document.querySelector('.header-menu__button');
let mobMenu = document.querySelector('.mobmenu');
let mobMenuClose = document.querySelector('.mobmenu-popup__close');
adMenu.addEventListener('click', () => {
  e.preventDefault();
  adMenu.classList.toggle('header-menu__button_active');
  mobMenu.classList.toggle('mobmenu_active');
});
mobMenuClose.addEventListener('click', () => {
  adMenu.classList.toggle('header-menu__button_active');
  mobMenu.classList.toggle('mobmenu_active');
});
let mobSubMenuButtons = document.querySelectorAll('.open-submenu');
// mobSubMenuButton.addEventListener('click', function(){
//   mobSubMenuButton.classList.toggle('open-submenu_active');
//   console.log(mobSubMenuButton.nextElementSibling.nextElementSibling)
// })

mobSubMenuButtons.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('open-submenu_active');
    item.nextElementSibling.nextElementSibling.classList.toggle('mobmenu-submenu_active');
  });
});


// yandex maps api
// ymaps.ready(function () {
//     var myMap = new ymaps.Map('map', {
//             center: [64.390190, 89.640126],
//             zoom: 4,
//             type: 'yandex#satellite',
//             controls: []
//         }, {
//             searchControlProvider: 'yandex#search'
//         }),
  
//         // Создаём макет содержимого.
//         MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//             '<div style="color: #ffffff; font-weight: bold;">$[properties.iconContent]</div>'
//         ),
  
//         myPlacemark = new ymaps.Placemark([55.755819, 37.617644], {
//             hintContent: 'Адрес в Москве',
//             balloonContent: 'Здесь будет Московский адрес'
//         }, {
//             // Опции.
//             // Необходимо указать данный тип макета.
//             iconLayout: 'default#image',
//             // Своё изображение иконки метки.
//             iconImageHref: '../img/mark.png',
//             // Размеры метки.
//             iconImageSize: [22, 22],
//             // Смещение левого верхнего угла иконки относительно
//             // её "ножки" (точки привязки).
//             iconImageOffset: [-5, -38]
//         }),
  
//         myPlacemark1 = new ymaps.Placemark([45.035470, 38.975313], {
//             hintContent: 'Адрес в Краснодаре',
//             balloonContent: 'Здесь будет Краснодарский адрес'
//         }, {
//             // Опции.
//             // Необходимо указать данный тип макета.
//             iconLayout: 'default#image',
//             // Своё изображение иконки метки.
//             iconImageHref: '../img/mark.png',
//             // Размеры метки.
//             iconImageSize: [22, 22],
//             // Смещение левого верхнего угла иконки относительно
//             // её "ножки" (точки привязки).
//             iconImageOffset: [-5, -38]
//         }),
        
        
//         myPlacemark2 = new ymaps.Placemark([54.989347, 73.368221], {
//             hintContent: 'Адрес в Омске',
//             balloonContent: 'Здесь будет омский адрес'
//         }, {
//             // Опции.
//             // Необходимо указать данный тип макета.
//             iconLayout: 'default#image',
//             // Своё изображение иконки метки.
//             iconImageHref: '../img/mark.png',
//             // Размеры метки.
//             iconImageSize: [22, 22],
//             // Смещение левого верхнего угла иконки относительно
//             // её "ножки" (точки привязки).
//             iconImageOffset: [-5, -38]
//         }),
        
        
//         myPlacemark3 = new ymaps.Placemark([54.314192, 48.403132], {
//             hintContent: 'Адрес в Омске',
//             balloonContent: 'Здесь будет омский адрес'
//         }, {
//             // Опции.
//             // Необходимо указать данный тип макета.
//             iconLayout: 'default#image',
//             // Своё изображение иконки метки.
//             iconImageHref: '../img/mark.png',
//             // Размеры метки.
//             iconImageSize: [22, 22],
//             // Смещение левого верхнего угла иконки относительно
//             // её "ножки" (точки привязки).
//             iconImageOffset: [-5, -38]
//         }),
  
//         myPlacemark4 = new ymaps.Placemark([55.159902, 61.402554], {
//             hintContent: 'Адрес в Челябинске',
//             balloonContent: 'Здесь будет челябинский адрес'
//         }, {
//             // Опции.
//             // Необходимо указать данный тип макета.
//             iconLayout: 'default#image',
//             // Своё изображение иконки метки.
//             iconImageHref: '../img/mark.png',
//             // Размеры метки.
//             iconImageSize: [22, 22],
//             // Смещение левого верхнего угла иконки относительно
//             // её "ножки" (точки привязки).
//             iconImageOffset: [-5, -38]
//         }),
        
//         myPlacemark5 = new ymaps.Placemark([54.735152, 55.958736], {
//             hintContent: 'Адрес в Уфе',
//             balloonContent: 'Здесь будет уфимский адрес'
//         }, {
//             // Опции.
//             // Необходимо указать данный тип макета.
//             iconLayout: 'default#image',
//             // Своё изображение иконки метки.
//             iconImageHref: '../img/mark.png',
//             // Размеры метки.
//             iconImageSize: [22, 22],
//             // Смещение левого верхнего угла иконки относительно
//             // её "ножки" (точки привязки).
//             iconImageOffset: [-5, -38]
//         }),
//         myPlacemark6 = new ymaps.Placemark([55.796127, 49.106414], {
//             hintContent: 'Адрес в Казани',
//             balloonContent: 'Здесь будет казанский адрес'
//         }, {
//             // Опции.
//             // Необходимо указать данный тип макета.
//             iconLayout: 'default#image',
//             // Своё изображение иконки метки.
//             iconImageHref: '../img/mark.png',
//             // Размеры метки.
//             iconImageSize: [22, 22],
//             // Смещение левого верхнего угла иконки относительно
//             // её "ножки" (точки привязки).
//             iconImageOffset: [-5, -38]
//         }),
//         myPlacemark6 = new ymaps.Placemark([48.480229, 135.071917], {
//             hintContent: 'Адрес в Хабаровске',
//             balloonContent: 'Здесь будет хабаровский адрес'
//         }, {
//             // Опции.
//             // Необходимо указать данный тип макета.
//             iconLayout: 'default#image',
//             // Своё изображение иконки метки.
//             iconImageHref: '../img/mark.png',
//             // Размеры метки.
//             iconImageSize: [22, 22],
//             // Смещение левого верхнего угла иконки относительно
//             // её "ножки" (точки привязки).
//             iconImageOffset: [-5, -38]
//         });
  
//     myMap.geoObjects
//         .add(myPlacemark)
//         .add(myPlacemark1)
//         .add(myPlacemark2)
//         .add(myPlacemark3)
//         .add(myPlacemark4)
//         .add(myPlacemark5)
//         .add(myPlacemark6)
//     myMap.controls
//         .add('zoomControl')
//   });


ymaps.ready(function () {
    var myMap = new ymaps.Map('mappa', {
            center: [45.035470, 38.975313],
            zoom: 17,
            type: 'yandex#satellite',
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
    
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #ffffff; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([45.035470, 38.975313], {
            hintContent: 'Адрес в Краснодаре',
            balloonContent: 'Здесь будет Краснодарский адрес'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/mark.png',
            // Размеры метки.
            iconImageSize: [22, 22],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });
    
    myMap.geoObjects
        .add(myPlacemark)
    myMap.controls
        .add('zoomControl')
    });
