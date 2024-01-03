const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const output = document.getElementById("output");
let counter = 0;
let max = 10;
let min = 1;

button1.addEventListener("click", function () {
 if(button1 > max){

 }
 else{
     output.innerHTML = counter++;
 }
});
button2.addEventListener("click", function () {
  output.innerHTML = 0;
});
button3.addEventListener("click", function () {
  if (counter < min) {
    alert("already at 0");
  } else {
    counter--;
    output.innerHTML = counter;
  }
});
