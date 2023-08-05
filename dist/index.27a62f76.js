const button = document.querySelector(".click");
const span = document.querySelector(".info");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const div = document.querySelector(".div"); /////////////////////////////////////////////////////////
 // Medium callback
 // const newArray = [];
 // let divP;
 // Z pętlą 'for i'
 // function filterArray(array, callback) {
 //   for (let i = 0; i < array.length; i++) {
 //     if (array[i] > callback) {
 //       newArray.push(array[i]);
 //     }
 //   }
 // }
 // Z pętlą 'forEach'
 // function filterArray(array, callback) {
 //   array.forEach((element) => {
 //     if (element > callback) {
 //       newArray.push(element);
 //     }
 //   });
 // }
 // function getCb(callback) {
 //   const cb = input1.value;
 //   const array = input2.value.split(" ").map(Number);
 //   callback(array, cb);
 // }
 // button.addEventListener("click", () => {
 //   newArray.length = 0;
 //   getCb(filterArray);
 //   if (divP) {
 //     div.removeChild(divP);
 //   }
 //   divP = document.createElement("p");
 //   divP.textContent = newArray;
 //   div.appendChild(divP);
 // });
 /////////////////////////////////////////////////////////
 // Easy Callback
 // let item;
 // function price(cost) {
 //   if (item) {
 //     div.removeChild(item);
 //   }
 //   item = document.createElement("p");
 //   item.textContent = `Item costs ${cost}$`;
 //   div.appendChild(item);
 // }
 // function getPrice(cb) {
 //   const cost = input1.value;
 //   cb(cost);
 // }
 // button.addEventListener("click", () => {
 //   getPrice(price);
 // });
 /////////////////////////////////////////////////////////
 // Date
 // const date = new Date();
 // button.addEventListener("click", () => {
 //   console.log(date.getUTCHours());
 // });
 /////////////////////////////////////////////////////////
 // Random Color + info what rgb
 // function getRandomHexColor() {
 //   return `#${Math.floor(Math.random() * 16777215)
 //     .toString(16)
 //     .padStart(6, "0")}`;
 // }
 // button.addEventListener("click", () => {
 //   document.body.style.backgroundColor = getRandomHexColor();
 //   span.innerHTML = `${document.body.style.backgroundColor}`;
 // });
 /////////////////////////////////////////////////////////

//# sourceMappingURL=index.27a62f76.js.map
