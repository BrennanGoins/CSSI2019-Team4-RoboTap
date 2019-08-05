const myButton = document.querySelector('#mybutton');
//const myBox = document.querySelector('#box');
const myCounter = document.querySelector('#box');
let bitCounter = 0;
myButton.addEventListener('click', (event) => {
bitCounter++;
myCounter.innerHTML = bitCounter + " Bits";
});

const item1 = document.querySelector('#upgrade1');


my.addEventListener('click', (event) => {
bitCounter++;
myCounter.innerHTML = bitCounter + " Bits";
});

/*if upgrade_1 == True => {
  Working on upgrade 1 javascript, need to add event listener and then put the if statement inside the event. check for >= 100 and then subtract 100
}*/
