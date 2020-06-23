window.addEventListener('load', function () {


    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    




    var app = document.querySelector('.app');
    var search = document.querySelector('.search-wrap');

    window.addEventListener('scroll', function () {
       
            app.style.display = 'none';
       

    })

})