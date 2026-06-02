
const allImage = $(".img-responsivex");
const dynamicImage = $(".dynamic-image");
const carouselBanner = new Swiper(".carousel-banner", {
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    autoplay: {
        delay: 6000,
    },
    resizeObserver: true,
    updateOnWindowResize: true,
    pagination: {
        el: ".banner-home-pagination",
        clickable: true,
    },
    on: {
        "slideChange": (event) => {
            $(dynamicImage).css({
                "opacity": 0,
                "transform": "scale(1)",
                "object-position": "center",
            });
            setTimeout(() => {
                $(dynamicImage).css({
                    "opacity": 1,
                    "transform": "scale(1.2)",
                    "object-position": "bottom"
                });
                $(dynamicImage).attr("src", $(allImage[event.realIndex]).attr("src"));
            }, 400);
        }
    }
});

let plansSwiper;

function initPlansSwiper() {

    if (window.innerWidth < 992) {

        if (!plansSwiper) {

            plansSwiper = new Swiper('.plans-swiper', {

                slidesPerView: 1.25,

                centeredSlides: true,

                spaceBetween: 16,

                loop: false,

                pagination: {
                    el: '.plans-swiper .swiper-pagination',
                    clickable: true
                }

            });

        }

    } else {

        if (plansSwiper) {

            plansSwiper.destroy(true, true);

            plansSwiper = undefined;

        }

    }

}

initPlansSwiper();

window.addEventListener('resize', initPlansSwiper);






let testimoniosSwiper;

function initTestimoniosSwiper() {

    if (window.innerWidth < 992) {

        if (!testimoniosSwiper) {

            testimoniosSwiper = new Swiper('.testimonios-swiper', {
                slidesPerView: 'auto',
                spaceBetween: 12,
                freeMode: true
            });

        }

    } else {

        if (testimoniosSwiper) {

            testimoniosSwiper.destroy(true, true);
            testimoniosSwiper = null;

        }

    }

}

initTestimoniosSwiper();

window.addEventListener('resize', initTestimoniosSwiper);



document
    .querySelectorAll('[data-bs-toggle="tab"]')
    .forEach(tab => {

        tab.addEventListener('shown.bs.tab', function () {

            document
                .querySelectorAll('.btn-tab')
                .forEach(btn => btn.classList.remove('active'));

            this.classList.add('active');

        });

    });