const myButton = document.querySelector('#mybutton');
//const myBox = document.querySelector('#box');
const myCounter = document.querySelector('#box');
let bitCounter = 0;
let multiplier = 1;
myButton.addEventListener('click', (event) => {
bitCounter += multiplier;
myCounter.innerHTML = bitCounter + " Bits";
});

const item1 = document.querySelector('#upgrade1');
const item2 = document.querySelector('#upgrade2');



upgrade1.addEventListener('click', (event) => {
if (bitCounter >= 10){
  bitCounter = bitCounter  - 10;
  multiplier = 5;
} else {

}

myCounter.innerHTML = bitCounter + " Bits";
});

upgrade2.addEventListener('click', (event) => {
if (bitCounter >= 40){
  bitCounter = bitCounter  - 40;
  multiplier = 20;
} else {

}
myCounter.innerHTML = bitCounter + " Bits";
});
/*if upgrade_1 == True => {
  Working on upgrade 1 javascript, need to add event listener and then put the if statement inside the event. check for >= 100 and then subtract 100
}*/
