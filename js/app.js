const sliderMain = new Swiper ('.slider__main', {
freeMode: true, //позволяет листать слайдер и останавливаться где угодно
centeredSlides: true, //первый слайд в центре
mousewheel: true, //позволяет крутить слайдер колесиком мышки
parallax: true,
    breakpoints: {
        0: {
            slidesPerView : 2.5,
            spaceBetween:20
        },
        680: {
            slidesPerView : 3.5,
            spaceBetween:60 
        }
    }
});

const sliderBg = new Swiper ('.slider__bg', {
    centeredSlides: true, //первый слайд в центре
    parallax: true,
    spaceBetween:60,
    slidesPerView : 3.5
});

sliderMain.controller.control = sliderBg;


 $('.slider__item').on('click', function(){
    $(this).toggleClass('open');
 });


 sliderMain.on('slideChange', e =>{
    sliderMain.activeIndex>0 ?  $('.desc').addClass('hiden') :  $('.desc').removeClass('hiden');
 });