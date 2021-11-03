"use strict";

console.log("hello");

document.getElementById("demo").addEventListener("click", function () {
  console.log("hello");

  document.querySelector(".hint_solution").style.visibility = "visible";
});
