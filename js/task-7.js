const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', event => {
  console.log(event.target.value);
  textRef.style.fontSize = `${Number(event.target.value)}px`;
});
