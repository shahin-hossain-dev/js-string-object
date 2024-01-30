const computer = {
    name: 'Asus',
    processor: 'intel i3',
    ram: '16GB',
    ssd: '512GB'
}

// key গুলো সব একটি array এর মধ্যে পেতে চাইলে 

const keys = Object.keys(computer);
console.log(keys)//[ 'name', 'processor', 'ram', 'ssd' ]