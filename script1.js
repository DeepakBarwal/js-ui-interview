// call, apply, bind

let name = {
  firstname: 'Deepak',
  lastname: 'Barwal',
  printFullName: function () {
    console.log(this.firstname + ' ' + this.lastname);
  },
};

name.printFullName();

let print = function (hometown, state) {
  console.log(this.firstname + ' from ' + hometown + ', ' + state);
};

let name2 = {
  firstname: 'Jon',
  lastname: 'Doe',
};

// function borrowing
name.printFullName.call(name2);

print.call(name, 'Kangra', 'Himachal Pradesh');

print.apply(name2, ['London', 'UK']);

// bind method
let printMyDetails = print.bind(name, 'Kangra', 'Himachal Pradesh');
printMyDetails();
