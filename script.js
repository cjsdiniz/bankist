'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(...arr);

// SLICE
console.log('\n🚩 * SLICE *');
console.log('1) ' + arr.slice(2));
console.log('2) ' + arr.slice(2, 4));
console.log('3) ' + arr.slice(-2));
console.log('4) ' + arr.slice(-1));
console.log('5) ' + arr.slice(1, -2));
console.log('F: ' + arr.slice());

// SPLICE
console.log('\n🚩 * SPLICE *');
console.log(arr);
//console.log('1) ' + arr.splice(2));
console.log('1) ' + arr.splice(-1));
console.log('2) ' + arr.splice(1, 2));
console.log('F: ' + arr);

// REVERSE
console.log('\n🚩 * REVERSE *');
arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['i', 'j', 'k', 'l'];
console.log(arr2);
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
console.log('\n🚩 * CONCAT *');
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // Same result as above.

// JOIN
console.log('\n🚩 * JOIN *');
console.log(letters.join('|'));

// NET AT
console.log('\n🚩 * NEW AT (ES2022) *');
const dummy = [22, 11, 33];
console.log('I: ' + dummy);
console.log(dummy[0]);
console.log(dummy.at(0));

// Getting last element
console.log(dummy[dummy.length - 1]);
console.log(dummy.slice(-1));
console.log(dummy.at(-1));

// With strings
console.log('my name'.at(-1));
