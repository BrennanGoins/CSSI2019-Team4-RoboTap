const myButton = document.querySelector('#mybutton');
const myCounter = document.querySelector('#box');

let bitCounter = 0;
let multiplier = 1;

let upgrade1Counter = 0;
let upgrade2Counter = 0;
let upgrade3Counter = 0;

let upgrade1cost = 1;
let upgrade2cost = 1;
let upgrade3cost = 1;

let clicksstart = 0;
let clicksend = 0;

myButton.addEventListener('click', (event) => {
bitCounter += multiplier;
myCounter.innerHTML = bitCounter + " Bits";
});

const item1 = document.querySelector('#upgrade1');
const item2 = document.querySelector('#upgrade2');
const item3 = document.querySelector('#myButton');

const upgrade1name = document.querySelector('#item1');
const upgrade2name = document.querySelector('#item2');
const upgrade3name = document.querySelector('#item3');

upgrade1.addEventListener('click', (event) => {
if (bitCounter >= (upgrade1cost)){
  bitCounter = bitCounter  - upgrade1cost;
  upgrade1Counter++;
  multiplier =  (2 * upgrade1Counter);
  upgrade1cost = upgrade1cost * 2;
  upgrade1name.innerHTML = "Cost: " + upgrade1cost + " Bits";
  upgrade1Counter ++;
};
myCounter.innerHTML = bitCounter + " Bits";
});

upgrade2.addEventListener('click', (event) => {
  console.log(upgrade2cost)
  if (bitCounter >= upgrade2cost){
    bitCounter = bitCounter  - upgrade2cost;
    upgrade2cost = upgrade2cost * 2;
    upgrade2name.innerHTML = "Cost: " + upgrade2cost + " Bits";
    myCounter.innerHTML = bitCounter + " Bits";
    upgrade2Counter++;
}
if (upgrade2Counter > 0) {
  setInterval(function(){
    bitCounter = bitCounter + 10
    myCounter.innerHTML = bitCounter + " Bits"; }, 1000);
};
});

upgrade3.addEventListener('click', (event) => {
  if (bitCounter >= upgrade3cost && upgrade3Counter <= 0){
    bitCounter = bitCounter  - upgrade3cost;
    myButton.src= "../Styles/robot2.gif";
    myButton.style.width = "50%";
    myCounter.innerHTML = bitCounter + " Bits";
    upgrade3Counter++;
  };
});

// if upgrade_1 == True => {
//   Working on upgrade 1 javascript, need to add event listener and then put the if statement inside the event. check for >= 100 and then subtract 100
// }
