const inputEl = document.querySelector("#validation-input");




inputEl.addEventListener("blur", (events) => {
    const inputText = Number(events.currentTarget.value.length);
    if (inputText === Number(inputEl.dataset.length)) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } else {
        inputEl.classList.add("invalid");
    };
});
