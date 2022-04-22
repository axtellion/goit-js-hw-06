function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  textEl: document.querySelector(".color"),
  buttonEl: document.querySelector(".change-color"),
  bodyEl: document.querySelector("body"),
}

refs.buttonEl.addEventListener("click", () => {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.textEl.textContent = getRandomHexColor();
});
