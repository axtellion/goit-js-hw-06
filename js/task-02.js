const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const arrayIngrad = document.querySelector("#ingredients")


ingredients.forEach(elem => {
  const text = elem;
  elem = document.createElement("li");
  elem.classList.add("item");
  elem.textContent = text;
  arrayIngrad.append(elem);
});