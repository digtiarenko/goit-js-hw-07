// Присвоили ссылочки
const inpurRef = document.querySelector('input#name-input');
const welcomeRef = document.querySelector('span#name-output');

// Добаляем слушатель
inpurRef.addEventListener('input', event => {
  welcomeRef.textContent = event.target.value;
  if (event.target.value === '') {
    welcomeRef.textContent = 'Незнакомец';
  }
});
