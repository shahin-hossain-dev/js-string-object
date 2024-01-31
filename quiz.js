var person = {};
person.name = "John";
person.age = 30;

/* let str = "Mississippi";
console.log(str.indexOf("i", 3)); */

const myObject = {
    a: 1,
    b: 2,
    c: 3
};

console.log(myObject.d);

for (let prop in myObject) {
    console.log(myObject[prop]);
}

const x = ""
if (!x.length) {
    console.log("Hey")
} else {
    console.log("Hi")
}

const str = "Hello";
str[0] = "h";
console.log(str);