var counter = 420;
const element = document.querySelector('#nombre');
element.innerHTML = 'nombre : ' + counter;
const plusOne = document.querySelector('#plusOne');
plusOne.addEventListener('click', () => {
    counter++;
    element.innerHTML = 'nombre : ' + counter;
});
const minusOne = document.querySelector('#minusOne');
minusOne.addEventListener('click', () => {
    counter--;
    element.innerHTML = 'nombre : ' + counter;
});
