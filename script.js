const mobileButton = document.querySelector(".menu--button");
const mobileMenu = document.querySelector(".menu-container");
const mobileButtonClose = document.querySelector("#button-close");

mobileButton.addEventListener("click", onClick);
mobileButtonClose.addEventListener("click", onClick);

function onClick(e) {
  mobileMenu.classList.toggle("active");
}
