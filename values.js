const computer = {
    name: 'Asus',
    processor: 'intel i3',
    ram: '16GB',
    ssd: '512GB'
}
// value গুলো যদি এক সাথে একটি array এর মধ্যে পেতে চাই

const values = Object.values(computer);
console.log(values); //[ 'Asus', 'intel i3', '16GB', '512GB' ]