const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const arrayIngrad = document.querySelector("#ingredients")


const ingradient = ingredients.map(elem => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.classList.add("item");
  ingredientsItem.textContent = elem;
  return ingredientsItem;
});

arrayIngrad.append(...ingradient);