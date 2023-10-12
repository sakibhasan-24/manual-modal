const mainContainer = document.querySelector(".main-container");
const offerBtn = document.querySelector(".btn");
const modalContainer = document.querySelector(".modal-container");
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-icon");

offerBtn.addEventListener("click", function () {
  /* mainContainer.classList.add("active");
  modalContainer.classList.remove("active"); */
  styleAdd(mainContainer, "active");
  styleRemove(modalContainer, "active");
});
closeBtn.addEventListener("click", function () {
  //   mainContainer.classList.remove("active");
  //   modalContainer.classList.add("active");
  styleRemove(mainContainer, "active");
  styleAdd(modalContainer, "active");
});
function styleAdd(className, style) {
  className.classList.add(style);
}
function styleRemove(className, style) {
  className.classList.remove(style);
}
