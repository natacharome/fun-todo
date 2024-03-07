const clock = document.querySelector("h4");

function blink() {
  setInterval(() => {
    clock.textContent = clock.textContent.includes(":")
      ? clock.textContent.replace(":", " ")
      : clock.textContent.replace(" ", ":");
  }, 500);
}
