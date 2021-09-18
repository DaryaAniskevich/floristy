const productCards = document.querySelectorAll(".p-m-catalog-list-card");
const slider = document.querySelector(".p-m-catalog-list-slider");
const sliderControlsBlock = document.querySelector(".p-m-catalog-controls");
const sliderControls = document.querySelectorAll(".p-m-catalog-controls__item");
let count = 0;
let width = 0;

const rollSlider = (sliderBlockClass, count) => {
  width = document.querySelector(sliderBlockClass).offsetWidth;
  slider.style.transform = `translateX(-${width * count}px)`;
};

sliderControlsBlock.addEventListener("click", (event) => {
  if (event.target.classList.contains("p-m-catalog-controls__item")) {
    sliderControls.forEach((item) => {
      if (event.target.id == item.id) {
        count = item.id - 1;
        event.target.classList.add("c-slider-controls__item--active");
      } else {
        item.classList.remove("c-slider-controls__item--active");
      }
    });

    rollSlider(".p-m-catalog-list", count);
  }
});

slider.addEventListener("touchstart", handleTouchStart, false);
slider.addEventListener("touchmove", handleTouchMove, false);

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
  const firstTouch = event.touches[0];
  x1 = firstTouch.clientX;
  y1 = firstTouch.clientY;
}

function handleTouchMove(event) {
  if (!x1 || !y1) {
    return false;
  }
  let x2 = event.touches[0].clientX;
  let y2 = event.touches[0].clientY;

  let xDiff = x2 - x1;
  let yDiff = y2 - y1;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      count--;
      if (count <= 0) {
        count = 0;
      }
    } else {
      count++;
      if (
        document.documentElement.clientWidth >= 768 &&
        document.documentElement.clientWidth < 1000
      ) {
        if (count >= 2) {
          count = 0;
        }
      } else {
        if (count >= productCards.length) {
          count = 0;
        }
      }
    }
    sliderControls.forEach((item) => {
      item.classList.remove("c-slider-controls__item--active");
      if (+item.id === count + 1) {
        item.classList.add("c-slider-controls__item--active");
      }
    });

    rollSlider(".p-m-catalog-list", count);
  }
  x1 = null;
  y1 = null;

  return;
}
