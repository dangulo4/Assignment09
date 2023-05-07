//STEP 1
let nbr = prompt('Enter a number');
nbr = Math.abs(nbr);
console.log(nbr);
//STEP 2
let decNbr = prompt('Enter a decimal');
decNbr = Math.ceil(decNbr);
console.log(decNbr);
//STEP 3
let decNbr2 = prompt('Enter a decimal');
decNbr2 = Math.floor(decNbr2);
console.log(decNbr2);
//STEP 4
let nbrs = prompt('Enter five number (ex: 1,2,3,4,5):');
nbrs = nbrs.split(',');
nbrs = nbrs.sort();
console.log(`The larget is: ${nbrs[0]}, and the smallest is: ${nbrs[nbrs.length - 1]}`);
//STEP 5
let sqrtNbr = prompt('Enter a number to find the square root');
sqrtNbr = Math.sqrt(sqrtNbr);
console.log(sqrtNbr);
