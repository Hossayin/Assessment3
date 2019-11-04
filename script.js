"use strict";

const bodyEl = document.querySelector("body");
const toggleColorEl = document.getElementById("toggleColor");
const addBoxEl = document.getElementById("addBox");
const newBoxEl = document.createElement("div");
newBoxEl.classList.add("box");
const boxAreaEl = document.querySelector("main");
const boxArray = [];
let counter = 0;
const color = ["white", "lightcoral", "white", "lightcoral"];

let i = 0;
toggleColorEl.addEventListener("click", function() {
  i++;
  let j = i + 1;
  if (i > color.length) i = 0;

  bodyEl.style.backgroundColor = color[i];
});

// addBoxEl.addEventListener("click", function() {
//   boxArray += newBoxEl;
//   counter++;
//   boxAreaEl.appendChild();
//   newBoxEl.innerText = counter;
// });

// addBoxEl.addEventListener("click", () => boxAreaEl.appendChild.add(newBoxEl));

addBoxEl.addEventListener("click", function(e) {
  counter++;
  boxAreaEl.appendChild(newBoxEl);
  newBoxEl.innerText = counter;
  newBoxEl.addEventListener("click", function() {
    newBoxEl.remove();
  });
});
