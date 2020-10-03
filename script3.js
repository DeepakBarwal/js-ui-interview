// let multiply = function (x, y) {
//   console.log(x * y);
// };

let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

// Function currying

// using bind method
// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5);

// using closure
let multiplyByTwo = multiply(2);
multiplyByTwo(3);
let multiplyByThree = multiply(3);
multiplyByThree(3);
