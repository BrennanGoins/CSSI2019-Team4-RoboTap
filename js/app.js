const myButton = document.querySelector('#mybutton');
const myCounter = document.querySelector('#box');

let bitCounter = 1;
let multiplier = 1;

let upgrade1Counter = 0;
let upgrade2Counter = 0;
let upgrade3Counter = 0;

let upgrade1cost = 100;
let upgrade2cost = 200;
let upgrade3cost = 250;

let clicksstart = 0;
let clicksend = 0;

let skinChanger = 0;

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
  upgrade1name.innerHTML = "Doubles Bits Per Click <br> Cost: " + upgrade1cost + " Bits " + "(" + upgrade1Counter + ")" + "</br>";
};
myCounter.innerHTML = bitCounter + " Bits";
});

upgrade2.addEventListener('click', (event) => {
  console.log(upgrade2cost)
  if (bitCounter >= upgrade2cost){
    bitCounter = bitCounter  - upgrade2cost;
    upgrade2cost = upgrade2cost * 2;
    upgrade2Counter++;
    upgrade2name.innerHTML = "Gives Bits Per Second <br> Cost: " + upgrade2cost + " Bits " + "(" + upgrade2Counter + ")" + "</br>";
    myCounter.innerHTML = bitCounter + " Bits";

}
if (upgrade2Counter > 0) {
  setInterval(function(){
    bitCounter = bitCounter + 2
    myCounter.innerHTML = bitCounter + " Bits"; }, 1000);
};
});

upgrade3.addEventListener('click', (event) => {
  if (bitCounter >= upgrade3cost){
    bitCounter = bitCounter  - upgrade3cost;
    upgrade3cost = upgrade3cost * 2;
    skinChanger = skinChanger + 1;
    console.log(skinChanger);
    if (skinChanger == 1){
      myButton.src = "../graphics/robot1_green_palete-Final.gif";
    } else if (skinChanger == 2) {
      myButton.src = "../graphics/robot1_orange_pallete-Final.gif";
    } else if (skinChanger == 3) {
      myButton.src = "../graphics/robot1_blue_pallete-Final.gif";
    } else if (skinChanger == 4) {
      myButton.src = "../graphics/robot2-Final.gif";
    } else if (skinChanger == 5) {
      myButton.src = "../graphics/robot2_red_pallete-Final.gif";
    } else if (skinChanger == 6) {
      myButton.src = "../graphics/robot2_light_blue_pallete-Final.gif";
    } else if (skinChanger == 7) {
      myButton.src = "../graphics/robot2_green_pallete-Final.gif";
    } else if (skinChanger == 8) {
      myButton.src = "../graphics/robot3-Final.gif";
    } else if (skinChanger == 9) {
      myButton.src = "../graphics/robot3_yellow-pallete_Final.gif";
    } else if (skinChanger == 10) {
      myButton.src = "../graphics/robot3_red_palete-Final.gif";
    } else if (skinChanger == 11) {
      myButton.src = "../graphics/robot3_purple_palete-Final.gif";
    }
    myButton.style.width = "50%";
    myCounter.innerHTML = bitCounter + " Bits";
    upgrade3Counter++;
    upgrade3name.innerHTML = "Robot Frame Upgrade <br> Cost: " + upgrade3cost + " Bits " + "(" + upgrade3Counter + ")" + "</br>";
  };
});

// if upgrade_1 == True => {
//   Working on upgrade 1 javascript, need to add event listener and then put the if statement inside the event. check for >= 100 and then subtract 100
// }
