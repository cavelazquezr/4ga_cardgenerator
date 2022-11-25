/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  render();
};

const generatorButton = document.getElementById("generatorButton");

generatorButton.addEventListener("click", () => {
  render();
});

const render = () => {
  //write your code here
  let cardNumber = document.getElementById("cardNumber");
  let cardSuit = document.getElementById("cardSuit");
  let cardSuitRotated = document.getElementById("cardSuitRotated");

  let cardNumberMap = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let cardSuitMap = ["♣", "♦", "♥", "♠"];

  cardNumber.innerHTML =
    cardNumberMap[Math.floor(Math.random() * cardNumberMap.length)];

  cardSuit.innerHTML =
    cardSuitMap[Math.floor(Math.random() * cardSuitMap.length)];
  cardSuitRotated.innerHTML = cardSuit.innerHTML;

  if (cardSuit.innerHTML == "♦" || cardSuit.innerHTML == "♥") {
    cardSuit.style.color = "red";
    cardSuitRotated.style.color = "red";
    cardNumber.style.color = "red";
  } else {
    cardSuit.style.color = "black";
    cardSuitRotated.style.color = "black";
    cardNumber.style.color = "black";
  }
};
