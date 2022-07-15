const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");

ingredients.forEach(elem => {
  let newItem = document.createElement("li");
  newItem.textContent = elem;
  newItem.classList.add("item");
  list.append(newItem);
  });