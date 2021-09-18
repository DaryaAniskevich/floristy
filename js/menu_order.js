const openMenuBtn = document.querySelector("#open-menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menuWindow = document.querySelector("#menu");

const openOrderModalBtn = document.querySelector("#open-order");
const closeOrderModalBtn = document.querySelector("#close-order");
const orderModal = document.querySelector("#order-modal");

openMenuBtn.onclick = () => {
  menuWindow.classList.add("c-menu--active");
};

closeMenuBtn.onclick = () => {
  menuWindow.classList.remove("c-menu--active");
};

openOrderModalBtn.onclick = () => {
  orderModal.classList.add("c-order--active");
};
closeOrderModalBtn.onclick = () => {
  orderModal.classList.remove("c-order--active");
};

window.addEventListener("scroll", function () {
  if (
    menuWindow.classList.contains("c-menu--active") &&
    pageYOffset > menuWindow.offsetHeight - 50
  ) {
    menuWindow.classList.remove("c-menu--active");
  }
});
