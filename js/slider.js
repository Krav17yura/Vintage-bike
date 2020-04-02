function slider() {
    let sliderIndex = 1,
        slides = document.querySelectorAll(".slider__item"),
        sliderDots = document.querySelector(".slider__dots"),
        dots = document.querySelectorAll(".dot");

    showSlides(sliderIndex);

    function showSlides(n) {
        if (n > slides.length) {
            sliderIndex = 1;
        }
        if (n < 1) {
            sliderIndex = slides.length;
        }


        slides.forEach((item) => item.style.display = "none");
        dots.forEach((item) => item.classList.remove("dot-active"));

        slides[sliderIndex - 1].style.display = "block";
        dots[sliderIndex - 1].classList.add("dot-active");


    }

    function prevSlider(n) {
        showSlides(sliderIndex = n);
    }
 

    sliderDots.addEventListener('click', function (e) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
                prevSlider(i);
            }
        }
    });
}
slider();

 