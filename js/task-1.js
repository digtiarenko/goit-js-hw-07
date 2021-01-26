const numberOfCategories = document.querySelectorAll('li.item').length;
console.log(`В списке ${numberOfCategories} категории`);

console.log(`\n*-*-*-*-*-*-*-*-*-*-*-*-\n`);

const summaryOfCategories = document
  .querySelectorAll('li.item')
  .forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryquantity = item.querySelectorAll('li').length;
    console.log(
      `Категорія: ${categoryName}, \nКількість елементів: ${categoryquantity}`,
    );
  });
