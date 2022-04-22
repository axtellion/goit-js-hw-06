
const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");


inputEl.addEventListener("input", (element) => {
    textEl.style.fontSize = element.currentTarget.value + "px";
});
