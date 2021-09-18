const productExamples = document.querySelectorAll(
  ".p-p-f-content-description-slider-images__item"
);
const productExamplesSlider = document.querySelector(
  ".p-p-f-content-description-slider-images__block"
);
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
let countProductSlider = 0;
let width = 0;

const rollSlider = (sliderBlockClass, count) => {
  width = document.querySelector(sliderBlockClass).offsetWidth;
  productExamplesSlider.style.transform = `translateX(-${width * count}px)`;
};

prevBtn.onclick = () => {
  countProductSlider--;
  if (countProductSlider <= 0) {
    prevBtn.classList.add("hide");
    nextBtn.classList.remove("hide");
  }
  rollSlider(".p-p-f-content-description-slider-images", countProductSlider);
};

nextBtn.onclick = () => {
  countProductSlider++;
  if (countProductSlider >= 1) {
    nextBtn.classList.add("hide");
    prevBtn.classList.remove("hide");
  }
  rollSlider(".p-p-f-content-description-slider", countProductSlider);
};

productExamplesSlider.addEventListener("touchstart", handleTouchStart, false);
productExamplesSlider.addEventListener("touchmove", handleTouchMove, false);

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
      countProductSlider--;
      if (countProductSlider <= 0) {
        councountProductSlidert = 0;
      }
    } else {
      countProductSlider++;
      if (countProductSlider >= 2) {
        countProductSlider = 0;
      }
    }

    rollSlider(".p-p-f-content-description-slider", countProductSlider);
    x1 = null;
    y1 = null;
  } else {
    x1 = null;
    y1 = null;
    return;
  }
}
