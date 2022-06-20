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
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}" > ${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
      `;

    containerMovements.insertAdjacentHTML('afterbegin', html); // ordena descendentemente
    // containerMovements.insertAdjacentHTML('beforeend', html); // ordena ascendentemente
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = movements => {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
};

calcDisplayBalance(account1.movements);
// console.log(containerMovements.innerHTML);
// const eurToUsd = 1.07;

// const movUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// console.log(movements);
// console.log(movUSD);

// const movUSDf = [];
// for (const mv of movements) {
//   movUSDf.push(mv * eurToUsd);
// }
// console.log(movUSDf);

// console.log(movements.map(mov => mov * eurToUsd));

// # Movements description
const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )} `
  // if (mov > 0) return `Movement ${i + 1}: You deposited ${mov}`;
  // else return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
);
console.log(movementsDescription);

// # Username creation
//const user = 'Steven Thomas Williams'; // stw
const createUsername = accs =>
  accs.forEach(acc => {
    //console.log(acc.owner);
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(letter => letter[0])
      .join('');
    console.log(acc.username);
  });
createUsername(accounts);
//console.log(accounts);

// # FILTER
// ## Deposits
const deposits = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposits);

// ## Withdrawals
console.log(movements.filter(mov => mov < 0));

// # REDUCE
// ## Accumulator is like a snowball
console.log(movements);
const balance = movements.reduce(function (acc, cur, i) {
  console.log(i + ') ' + acc);
  return acc + cur;
}, 0);
console.log(balance);

// With a for loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;

console.log('Balance2: ', balance2);

// Maximum value
const max = movements.reduce((p, c) => (c > p ? c : p), movements[0]);
console.log('Maximum: ', max);

console.log('🚩');
const eurToUsd = 1.07;

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
