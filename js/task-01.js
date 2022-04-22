const categoryNamber = document.querySelectorAll("li.item");



console.log(`Number of categories: ${categoryNamber.length}`);

categoryNamber.forEach(elem => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`);
});