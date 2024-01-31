/* 
Task-1:
Count how many times a string has the letter a
 */

const str = 'Count how many times a string has the letter a';
let letter = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
        letter = letter + 1;
    }
}
// console.log(letter) //4

/* 
Task-2:
Count how many times a string has the letter a or A
 */

const str2 = 'He found A mysterious letter on his doorstep. A sense of curiosity overwhelmed him. The cat sat on A sunny windowsill, enjoying the warmth of the sun.';
let letter2 = 0;
for (let i = 0; i < str2.length; i++) {
    if (str2[i].toLowerCase() === 'a') {
        letter2 += 1;
    }
}
// console.log(letter2)

/* 
Task-3:
Check whether a string contains all the vowels a, e, i, o, u
*/
const str3 = 'He found A mysterious letter on his doorstep. A sense of curiosity overwhelmed him. The cat sat on A sunny windowsill, enjoying the warmth of the sun.';

if (str3.includes('a') && str3.includes('e') && str3.includes('i') && str3.includes('o') && str3.includes('u')) {
    // console.log('All vowel exist in the sentence')
}
else {
    // console.log('All vowel are not exist in the sentence')

}

/* 
Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y.
*/

const str4 = 'If a given string has either x, replace x by y. if the given string has X, replace it by Y.';

if (str4.includes('x')) {
    const newStr = str4.replaceAll('x', 'y');
    console.log(newStr)
}
if (str4.includes('X')) {
    const newStr = str4.replaceAll('X', 'Y');
    console.log(newStr);
}

/* 
Task-5:
Capitalize Every first Letter of each word in a String
 */

let str5 = 'capitalize every first letter of each word in a string';

const text = str5.split(' ');
let newText = [];

for (let i = 0; i < text.length; i++) {
    // const element = text[i][0].toUpperCase();
    let word = text[i];

    let capitalCase = word.replace(word[0], word[0].toUpperCase());
    newText.push(capitalCase);
}
console.log(newText.join(' '));
