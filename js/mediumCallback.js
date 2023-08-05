const button = document.querySelector(".click");
const span = document.querySelector(".info");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const div = document.querySelector(".div");

const newArray = [];
let divP;

// Z pętlą 'for i'
// function filterArray(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > callback) {
//       newArray.push(array[i]);
//     }
//   }
// }

// Z pętlą 'forEach'
function filterArray(array, callback) {
  array.forEach((element) => {
    if (element > callback) {
      newArray.push(element);
    }
  });
}

function getCb(callback) {
  const cb = input1.value;
  const array = input2.value.split(" ").map(Number);
  callback(array, cb);
}

button.addEventListener("click", () => {
  newArray.length = 0;
  getCb(filterArray);

  // if (divP) {
  //   div.removeChild(divP);
  // }

  divP = document.createElement("p");
  divP.textContent = newArray;
  div.prepend(divP);
});
