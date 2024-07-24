var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: Math.floor(document.querySelectorAll('.swiper-slide').length / 2-1),
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
        
    },
    autoplay: {
        delay: 3000, // Auto slide every 2.5 seconds
        disableOnInteraction: false,
    },
    loop:true,
});