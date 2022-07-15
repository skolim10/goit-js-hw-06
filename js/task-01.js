const categoriesCount = document.querySelector("ul#categories").childElementCount;
console.log(`Number of categories: ${categoriesCount}`);

const categoryName = document.querySelectorAll(".item>h2");
categoryName.forEach(val => {console.log(`Category: ${val.textContent}\nElements: ${val.nextElementSibling.children.length}`)},);
