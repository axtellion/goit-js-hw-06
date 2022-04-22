const categoryNamber = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryNamber.length}`);


const firstEl = categoryNamber[0];
console.log("Category:", firstEl.firstElementChild.textContent);
console.log("Elements:", firstEl.lastElementChild.children.length);

const midlEl = categoryNamber[1];
console.log("Category:", midlEl.firstElementChild.textContent);
console.log("Elements:", midlEl.lastElementChild.children.length);

const lastEl = categoryNamber[2];
console.log("Category:", lastEl.firstElementChild.textContent);
console.log("Elements:", lastEl.lastElementChild.children.length);





























// const categoryTitle = document.querySelector("h2")
// console.log(`Categoty: ${categoryTitle.textContent}`);

// console.log(categoryTitle.previousElementSibling)



// const categotyAnimalEl = document.querySelector("ul");
// const lastCategoryTechno = categotyAnimalEl.lastElementChild;
// console.log(`Categoty: ${lastCategoryTechno.firstElementChild.textContent}`)

// const last = lastCategoryTechno.lastElementChild;
// console.log(`Element: ${last.childElementCount}`);