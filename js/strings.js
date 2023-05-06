//STEP 1
let userName = prompt('Enter Name').toLowerCase();
let userNameLength = userName.length;
alert(userNameLength);
//STEP 2
let firstName = prompt('Enter First Name');
let findChar = parseInt(prompt('Enter numnber'));
alert(firstName.charAt(findChar));
//STEP 3
let fName = prompt('Enter first name');
let lName = prompt('Enter last name');
let fullName = fName.concat(' ').concat(lName);
alert(`Your name is: ${fullName}`);
//STEP 4
let text = 'he quick brown fox jumps over the lazy dog';
alert(`The last index of fox is at position:  ${text.indexOf('fox')}`);
//STEP 5
let lasttext = 'The quick brown fox jumps over the lazy fox';
alert(`The last index of fox is at position:  ${lasttext.lastIndexOf('fox')}`);
//STEP 6
let newText = 'The quick brown fox jumped over the lazy dog';
let yourName = prompt('Enter full name');
replaceText = newText.replace('the lazy dog', yourName);
alert(replaceText);
//STEP 7
let newText2 = 'The quick brown fox jumped over the lazy dog';
let word = prompt('Enter a word');
searchWord = newText2.search(word);
alert(`The word ${word} is at position ${searchWord}`);
//STEP 8
let phrase = 'the lazy dog';
let old_string = 'The quick brown fox jumped over the lazy dog';
let new_string = old_string.substring(old_string.search(phrase)).toUpperCase();
alert(new_string);
//STEP 9
let new_text = ' THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG ';
let trim_text = new_text.trim().toLowerCase();
alert(trim_text);
//STEP 10
let str1 = 'the quick brown fox jumps over the lazy dog';
let str2 = str1.charAt(0).toUpperCase();
str1 = str1.replace(str1.charAt(0), str1.charAt(0).toUpperCase());
alert(str1);
