const myButton = document.querySelector('#mybutton');
//const myBox = document.querySelector('#box');
const myCounter = document.querySelector('#box');
let bitCounter = 0;
myButton.addEventListener('click', (event) => {
bitCounter++;
myCounter.innerHTML = bitCounter + " Bits";
});