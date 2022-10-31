let ratings = document.querySelectorAll(".rating-circle");
let button = document.querySelector("button");
let first = document.querySelector(".first-div");
let final = document.querySelector(".final-div");
let selectedText = document.querySelector(".selected-text");
var selected = 0;
for (let rating of ratings) {
  rating.addEventListener("click", ratingClickHandler);
}

function ratingClickHandler(event) {
  for (let rating of ratings) {
    rating.style = "";
  }
  selected = parseInt(event.target.innerText);
  event.target.style.backgroundColor = "hsl(217, 12%, 63%)";
  event.target.style.color = "White";
}

button.addEventListener("click", btnClickHandler);

function btnClickHandler() {
  if (selected === 0) {
    alert("Please choose a rating");
  } else {
    selectedText.innerText = `You selected ${selected} out of 5`;
    first.classList.remove("show");
    first.classList.add("hide");
    final.classList.remove("hide");
    final.classList.add("show");
  }
}
