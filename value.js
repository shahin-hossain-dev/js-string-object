const person = {
    name: 'Shain Hossain',
    age: 27,
    profession: 'Developer',
    salary: 18000,
    married: true,
    'fav place': ['Sundarban', 'Bandarban', 'moynamoti']
}
// 3 ভাবে value set করা যায়।
// 1.
person.name = 'Muhammad Shahin';
// 2.
person['salary'] = 19000;

// property কে একটা variable এর মধ্যে রেখে Value পাওয়া যায়।
//  3.
const prof = 'profession';
// console.log(person[prof]) // get profession value
person[prof] = 'Devops'; //set profession value

console.log(person.profession)


// console.log(person)