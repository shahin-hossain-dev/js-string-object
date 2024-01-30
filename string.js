// ৩ ভাবে string declare করা যায় single Quote, double quote, backtick 
// string কিছুটা array এর মতো।

const country = 'Bangladesh';
const division = "Noakhali";
const district = `Khulna`;
const thana = new String('Uzirpur'); //এটা একটা string but object এর মতো আচরণ করে।  using special case.

// console.log(typeof thana); //object
// console.log(thana) // [String: 'Uzirpur']

// string এর length বের করা যায় ‍array এর মতো। তবে string এর মধ্যে প্রতিটা space & character count করে.

const capital = 'Dhaka';
// console.log(capital.length) //5

//string এর index এর মান পাওয়া যায়।
// console.log(capital[0]) //D  

// string এর index মান চেন্জ করা যায় না। String কে immutable বলে।
// ‍array is mutable -> array কে চেন্জ করা যায়।
console.log(capital);
capital[0] = 'P';
console.log(capital);
