const button = document.querySelector(".click");
const span = document.querySelector(".info");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const div = document.querySelector(".div");

let item;

function price(cost) {
  // if (item) {
  //   div.removeChild(item);
  // }
  item = document.createElement("p");
  item.textContent = `Item costs ${cost}$`;
  div.prepend(item);
}

function getPrice(cb) {
  const cost = input1.value;
  cb(cost);
}

button.addEventListener("click", () => {
  getPrice(price);
});
