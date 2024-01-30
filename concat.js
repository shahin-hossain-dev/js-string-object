// concat() দুইটা element বা array & String variable কে যুক্ত করার জন্য ব্যবহার করা হয়।
const first = 'Abid';
const last = 'Nabid';

// const fullName = first + ' ' + last;
// console.log(fullName)

// const fullName2 = first.concat(' ', last);
const fullName2 = first.concat(' ').concat(last);
console.log(fullName2)

const arr = [10, 20, 30];
const arr2 = [40, 50, 60];

console.log(arr.concat(arr2))