const button = document.querySelector(".click");
const span = document.querySelector(".info");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const div = document.querySelector(".div");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

button.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  span.innerHTML = `${document.body.style.backgroundColor}`;
});
