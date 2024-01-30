const person = {
    name: 'Shain Hossain',
    age: 27,
    profession: 'Developer',
    salary: 18000,
    married: true,
    'fav place': ['Sundarban', 'Bandarban', 'moynamoti']
}

// get value of object 
// dot notation => dot symbol দিয়ে object er property access করা।
const income = person.salary;
// console.log(income)
//bracket Notation -------------------> 

// bracket notation দিয়ে property access করলে property কে string আকারে লিখতে হবে।

console.log(person['age']);

// string type property কে access করতে হলে bracket notation use করতে হবে।

console.log(person['fav place'])