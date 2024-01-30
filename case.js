

const school = 'RAJ UK Uttara Model School';

// toLowerCase() এর কাজ হলো String এর সকল character কে lower case করে ফেলবে।

console.log(school.toLowerCase());

// toUpperCase() এর কাজ হলো String এর সকল character কে upper case করে ফেলবে।
console.log(school.toUpperCase());
/* 
uppercase : ABCD EFG
lowercase: abcd efg
*/
const subject = 'Chemistry';
const book = 'chemistry';

// use case হলো এগুলো compare এর জন্য খুব ব্যবহার হয়।
if (subject.toLowerCase() === book.toLowerCase()) {
    console.log('I am reading book');
}
else {
    console.log('condition is not true')
}

// trim(), trimStart(), trimEnd() এগুলো ব্যবহার করা হয় string এর শুরুতে এব! শেষে যদি white space পরে যায় তাহলে সেগুলোকে trim করে দেয়।

const drink = 'water';
const liquid = '  water ';

if (drink.trim() === liquid.trim()) {
    console.log('We are Drinking Water')
}
else {
    console.log('Condition is not true');
}
