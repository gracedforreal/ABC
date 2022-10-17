"strict";
const inputField = document.getElementById("input");
const submitBtn = document.querySelector(".button");
const removeBg = document.querySelector(".display");
const removeFooter = document.querySelector("footer");

const words = {
  A: "Apple",
  B: "Ball",
  C: "Cat",
  D: "Dog",
  E: "Elephant",
  F: "Fish",
  G: "Goat",
  H: "Hat",
  I: "Ice",
  J: "Jacket",
  K: "King",
  L: "Lion",
  M: "Monkey",
  N: "Net",
  O: "Orange",
  P: "Pig",
  Q: "Queen",
  R: "Rat",
  S: "Shark",
  T: "Turtle",
  U: "Umbrella",
  V: "Vulture",
  W: "Woodpecker",
  X: "X-ray",
  Y: "Yam",
  Z: "Zebra",
};

submitBtn.addEventListener("click", function () {
  let letter = inputField.value;
  removeBg.style.backgroundImage = "";
  removeFooter.innerHTML = "";

  console.log(letter);
  if (letter === "") {
    document.getElementById("demo").innerHTML = "Type a letter";
    document.getElementById("image").innerHTML =
      '<img width="200" height="200" src="images/crying.webp">';
  } else if (!(letter in words)) {
    document.getElementById("demo").innerHTML = "Not a letter";
    document.getElementById("image").innerHTML =
      '<img width="200" height="200" src="images/sad.jpg">';
  } else {
    document.getElementById("demo").innerHTML = words[`${letter}`];
    document.getElementById(
      "image"
    ).innerHTML = `<img width="200" height="200" src="images/${letter}.jpg">`;
  }

  inputField.focus();
});
