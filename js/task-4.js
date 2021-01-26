let counterValue = 0;

// Создаем ссылочки
let counterValueRef = document.querySelector('#value');
const decrementButtonRef = document.querySelector(
  '#counter button[data-action="decrement"]',
);
const incrementButtonRef = document.querySelector(
  '#counter button[data-action="increment"]',
);

// Вешаем слушатели
decrementButtonRef.addEventListener('click', () => {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
});
incrementButtonRef.addEventListener('click', () => {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
});
