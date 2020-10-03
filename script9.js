// Thinking Recursively
let user = {
  name: 'Raviraj',
  address: {
    personal: {
      city: 'Jaipur',
      state: 'Rajasthan',
      area: 'Raandpuria',
    },
    office: {
      city: 'Hyderabad',
      area: {
        landmark: 'HiTech',
      },
    },
  },
};

let magic = (obj, parent, finalObj) => {
  for (let key in obj) {
    if (typeof obj[key] === 'object')
      magic(obj[key], parent + '_' + key, finalObj);
    else finalObj[parent + '_' + key] = obj[key];
  }
};

let finalObj = {};
magic(user, 'user', finalObj);
console.log(finalObj);
