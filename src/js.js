function question() {
  let name = prompt("What is your name?");
  let answer = prompt("Do you like coffee?");

  if (answer === "yes") {
    alert("Hi, " + name + "! Go drink some more coffee!");
  } else {
    alert("Hi, " + name + "! I'm sorry you don't like yummy things.");
  }
}
let coffeeQuestion = document.querySelector("button.coffeeButton");

coffeeQuestion.addEventListener("click", question);
