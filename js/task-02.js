const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
const items = [];

const ingredientList = ingredients.forEach(elem => {
  let newItem = document.createElement("li");
  newItem.textContent = elem;
  newItem.classList.add("item");
  items.push(newItem);
  });
  list.append(...items);