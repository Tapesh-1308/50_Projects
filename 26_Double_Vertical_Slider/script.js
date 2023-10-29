const sliderContainer = document.querySelector(".slider-container");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const slidesLength = rightSlide.querySelectorAll('div').length;

let activeSlideIdx = 0;
leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));


function changeSlide(dir) {
    const sliderHeight = sliderContainer.clientHeight;

    if(dir === "up") {
        activeSlideIdx++;
        if(activeSlideIdx > slidesLength - 1)
            activeSlideIdx = 0;
    }
    else if(dir === "down") {
        activeSlideIdx--;
        if(activeSlideIdx < 0)
            activeSlideIdx = slidesLength - 1;
    }
    rightSlide.style.transform = `translateY(-${activeSlideIdx * sliderHeight}px)`;
    leftSlide.style.transform = `translateY(${activeSlideIdx * sliderHeight}px)`;
}