var counter = 420;
var plusOne = document.querySelector('#plusOne');
plusOne.addEventListener('click', function(e) {
    counter++;
})
var element = document.querySelector('#nombre');
element.innerHTML = 'nombre : ' + counter;