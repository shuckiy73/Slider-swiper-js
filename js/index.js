const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500, // скорость переключения слайдов
    effect: 'coverflow', // cards, coverflow, flip, fade, cube,slider
    // initialSlide: 2, // Начинаем со 2 слайдера
    // freeMode: true, // можно перетаскивать как ленту
    slidesPerView: 2, // кол-во активных слайдов
    centeredSlides: true, // 


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        // clickable: true, // true - Пагинация становится кликабельной
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});