// // Prototype and Prototypal Inheritance
// let arr = ['Jon', 'Doe'];
let obj = {
  name: 'Ravi',
  city: 'Jaipur',
  getIntro: function () {
    console.log(this.name + ' from ' + this.city);
  },
};

// function fun() {
//   //
// }

// /*
//     arr.__proto__ same as Array.prototype ->
//     arr.__proto__.__proto__ same as obj.__proto__ same as Object.prototype -> null

//     fun.__proto__ same as Function.prototype -> fun.__proto__.__proto__ is same as Object.prototype -> null
// */

let obj2 = {
  name: 'Jon',
};

// Never Do This!
obj2.__proto__ = obj;
