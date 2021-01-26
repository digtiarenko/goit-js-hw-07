const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');
ingredientsListRef.textContent = 'ИНГРИДИЕНТЫ:';

const ingredientsList = ingredients.map(ingredient => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = `${ingredient}`;

  return ingredientItem;
});

ingredientsListRef.append(...ingredientsList);
