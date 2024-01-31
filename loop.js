// object কে কিভাবে লুপ করে property, value পাওয়া যায়।

const mobile = {
    name: 'Samsung',
    color: 'Black',
    price: 19999,
    camera: '48px'
}
// for..of loop use করে array এর মধ্যে লুপ করা যায়।
// for..in loop use করে object এর মধ্যে লুপ করা যায়।


for (let prop in mobile) {
    // console.log(prop, mobile[prop]);
}

// Object.keys() method use করেও object এর value গেুলোকে পাওয়া যায়।

const keys = Object.keys(mobile);
for (let prop of keys) {
    console.log(prop, mobile[prop])
}
