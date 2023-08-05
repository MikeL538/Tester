let result = [];

function isNumberInArray(array, number) {
  number.forEach((num) => {
    if (array.includes(num)) {
      result.push(num);
    }
  });

  console.log(result);
  result = [];
}

isNumberInArray([1, 2, 3, 4, 5], [2, 3, 4]); // 2, 3, 4
isNumberInArray([2, 4, 6, 8, 10], [1, 2, 3, 4, 10]); // 2, 4, 10
isNumberInArray([2, 4, 8], [1, 3, 5]); // -
isNumberInArray([102, 103, 502], [1, 5, 103]); // 103

// Version for amount of numbers checked in number array
// function isNumberInArrayAmount(amount, array, number) {
//   for (let i = 0; i < amount; i++) {
//     if (array.includes(number[i])) {
//       result.push(number[i]);
//     }
//   }
//   console.log(result);
//   result = []; // Clear array after results.
// }

// isNumberInArrayAmount(4, [1, 2, 3, 4, 5], [1, 3, 6, 7]); // 1 3
// isNumberInArrayAmount(2, [3, 5, 7, 9, 1], [3, 7]); // 3 7
// isNumberInArrayAmount(4, [2, 4, 6, 8, 10], [2, 3, 4, 5, 7, 6]); // 2 4
// isNumberInArrayAmount(1, [1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5]); // -
