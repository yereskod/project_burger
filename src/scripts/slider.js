(function () {
    const prevSlide = document.querySelector('.slider__prev');
    const nextSlide = document.querySelector('.slider__next');
    const sliderWindow = document.querySelector('.burgers__slider');
    const sliderList = document.querySelector('.burgers__col');
    const slides = document.querySelectorAll('.slide');
    let minRight = 0;
    let step = sliderWindow.offsetWidth;
    let maxRight = (slides.length - 1) * step;
    let currentRight = 0;
    sliderList.style.right = currentRight;
    function leftMove() {
        if (currentRight > minRight) {
            currentRight -= step;
            sliderList.style.right = currentRight + "px";
        } else {
            currentRight = maxRight;
            sliderList.style.right = maxRight + "px";
        }
    }
    function rightMove() {
        if (currentRight < maxRight) {
            currentRight += step;
            sliderList.style.right = currentRight + "px";
        } else {
            currentRight = minRight;
            sliderList.style.right = minRight + "px";
        }
    }
    prevSlide.addEventListener('click', function (e) {
        e.preventDefault();
        leftMove();
    });
    nextSlide.addEventListener('click', function (e) {
        e.preventDefault();
        rightMove();
    });
})()
