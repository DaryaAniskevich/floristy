const products = document.querySelectorAll(
  ".p-p-f-content-description-slider-images__item"
);
const productSlider = document.querySelector(
  ".p-p-f-content-description-slider-images__block"
);
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
let count = 0;
let width = 0;

const rollSlider = (sliderBlockClass, count) => {
  width = document.querySelector(sliderBlockClass).offsetWidth;
  productSlider.style.transform = `translateX(-${width * count}px)`;
};

prevBtn.onclick = () => {
  count--;
  if (count <= 0) {
    prevBtn.classList.add("hide");
    nextBtn.classList.remove("hide");
  }
  rollSlider(".p-p-f-content-description-slider-images", count);
};

nextBtn.onclick = () => {
  count++;
  if (count >= 1) {
    nextBtn.classList.add("hide");
    prevBtn.classList.remove("hide");
  }
  rollSlider(".p-p-f-content-description-slider", count);
};

productSlider.addEventListener("touchstart", handleTouchStart, false);
productSlider.addEventListener("touchmove", handleTouchMove, false);

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
      if (count >= 2) {
        count--;
      }
    }

    rollSlider(".p-p-f-content-description-slider", count);
  }
  x1 = null;
  y1 = null;

  return;
}
