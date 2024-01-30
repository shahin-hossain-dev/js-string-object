// string reverse  
const sentence = 'I am Learning web Development';

let reverse = ''
for (let letter of sentence) {
    reverse = letter + reverse; // letter কে আগে বসিয়ে reverse কে পরে যোগ করা হয়েছে।
}

// console.log(reverse)

// 2nd system
let rev = '';

for (let i = 0; i < sentence.length; i++) {
    // console.log(sentence[i])
    const letter = sentence[i];
    rev = letter + rev;
}
// console.log(rev)

//3rd system

// reverse() method এর কাজ হলো array কে reverse করা।

let reversed = '';

reversed = sentence.split('').reverse().join('')
console.log(reversed)