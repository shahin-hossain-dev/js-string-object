// কয়েক ভাবে object declare করা যায়।

const pen = { name: 'Econo', price: '20', color: 'Black' };

// new Object() দিয়ে একটি Object তৈরী করা যায়। 
const pencil = new Object();

// object.create({}) লিখেও একটি object make করা যেতে পারে।
const rubber = Object.create({});
console.log(rubber)