const inputEl = document.querySelector("#validation-input");




inputEl.addEventListener("blur", (events) => {
    const inputText = events.currentTarget.value.length;
    if (inputText >= inputEl.dataset.length) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    };
    if (inputText < inputEl.dataset.length) {
        inputEl.classList.add("invalid");
    };
});
