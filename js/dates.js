//STEP 1
let year = prompt('Enter year');
let month = prompt('Enter month');
const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

console.log(daysInMonth(year, month));
//STEP 2
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
let m = prompt('Enter date (ex: 1/1/2023');
m = new Date(m).getMonth();
console.log(months[m]);
//STEP 3
const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
let d = prompt('Enter date (ex: 1/1/2023');
d = new Date(d).getDay();

if (d == 0 || d == 6) {
  console.log(`Yes ${day[d]} is a weekend`);
} else {
  console.log(`No ${day[d]} is not a weekend.`);
}

//STEP 4
const day2 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
let today = prompt('Enter date (ex: 1/1/2023');
yesterday = new Date(today).getDate();
console.log(`Yester was: ${day2[yesterday - 1]}`);

//STEP 5
const day3 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
let d2 = prompt('Enter date (ex: 1/1/2023');
d2 = new Date(d2).getDay();
console.log(day3[d2].charAt(0));
