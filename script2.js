// Polyfill for bind method

let name = {
  firstname: 'Jon',
  lastname: 'Doe',
};

let printName = function (hometown, state, country) {
  console.log(
    this.firstname +
      ' ' +
      this.lastname +
      ' , ' +
      hometown +
      ' , ' +
      state +
      ' , ' +
      country
  );
};

// usual bind method
let printMyName = printName.bind(name, 'Delhi');
printMyName('NCR', 'India');

let myname = {
  firstname: 'Deepak',
  lastname: 'Barwal',
};

// our bind method implementation
Function.prototype.mybind = function (...args) {
  let obj = this,
    params = args.slice(1);

  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.mybind(myname, 'Kangra');
printMyName2('Himachal Pradesh', 'India');
