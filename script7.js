// sum(1)(2)(3)(4)(5)...(n)()

// let sum = function (a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     }
//     return a;
//   };
// };

let sum = (a) => (b) => (b ? sum(a + b) : a);

console.log(sum(1)(2)(3)(4)());
