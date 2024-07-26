document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Add click event listeners to Swiper slides
    var slides = document.querySelectorAll('.swiper-slide');
    var infoBox = document.getElementById('bdyyy');
    
    slides.forEach(function(slide) {
        slide.addEventListener('click', function() {
            var infoType = this.getAttribute('data-info');
            showInfoBox(infoType);
        });
    });

    function showInfoBox(type) {
        var content = '';

        if (type === 'prewedding') {
            content = '<p>Pre-wedding content goes here...</p>';
        } else if (type === 'haldi') {
            content = '<p>Haldi content goes here...</p>';
        }

        infoBox.innerHTML = content;
        infoBox.classList.add('show');
    }

    // Optionally, you can add a click event to the infoBox to close it
    infoBox.addEventListener('click', function() {
        this.classList.remove('show');
    });
});
