const openButton = document.querySelector(".dialog__open");
const dialog = document.querySelector(".dialog");
const closeButton = document.querySelector(".dialog__close");
const body = document.querySelector("body");

openButton.addEventListener("click", () => {
  dialog.showModal();
  document.querySelector("body").style.filter = "blur(20px)";
});

closeButton.addEventListener("click", () => {
  dialog.close();
  document.querySelector("body").style.filter = "blur(0px)";
});
