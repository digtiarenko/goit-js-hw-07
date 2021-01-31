// Создаем ссылочки
const inputRef = document.querySelector('#controls > input');
const createBoxesRef = document.querySelector(
  '#controls > [data-action="render"]',
);
const destroyBoxesRef = document.querySelector(
  '#controls > [data-action="destroy"]',
);
const boxesParentNode = document.querySelector('#boxes');

// Вешаем слушатель
createBoxesRef.addEventListener('click', () => {
  boxesParentNode.append(...boxesArray);
  inputRef.value = '';
});
destroyBoxesRef.addEventListener('click', () => {
  destroyBoxes();
  console.log('хоп');
});
let numberOfBoxes;
inputRef.addEventListener('change', event => {
  createBoxes(inputRef.value);
  numberOfBoxes = event.target.value;
  console.log(numberOfBoxes);
});

// Функция создания
let boxesArray = [];
const createBoxes = numberOfBoxes => {
  for (let i = 0; i < numberOfBoxes; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.display = 'inline-block';
    box.style.marginRight = '10px';
    box.style.backgroundColor = randomColor();
    boxesArray.push(box);
  }
  console.dir(boxesArray);
};

// Функция удоления

// const destroyBoxes = () => {
//   boxesParentNode.remove(...boxesParentNode.children);
//   boxesArray = [];
// };

const destroyBoxes = () => {
  boxesParentNode.innerHTML = '';
  boxesArray = [];
  inputRef.value = '';
};

// Рандомный цвет
function randomColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
  return bgColor;
}
