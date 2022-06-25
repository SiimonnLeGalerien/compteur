var counter = 420;
var element = document.querySelector('#nombre');
element.innerHTML = 'nombre : ' + counter;
var plusOne = document.querySelector('#plusOne');
plusOne.addEventListener('click', () => {
    counter++;
    element.innerHTML = 'nombre : ' + counter;
});
var minusOne = document.querySelector('#minusOne');
minusOne.addEventListener('click', () => {
    counter--;
    element.innerHTML = 'nombre : ' + counter;
});
