const counterValue = document.querySelector("#value");
const addIncrement = document.querySelector('button[data-action="increment"]')
const remuveDecrement = document.querySelector('button[data-action="decrement"]')


addIncrement.addEventListener("click", () => {
    const newValue = Number(counterValue.textContent);
    counterValue.textContent =  newValue + 1;
})

remuveDecrement.addEventListener("click", () => {
    counterValue.textContent -= 1;
})