const products=[
    {name: 'laptop', price: 45000, color: 'silver'},
    {name: 'tablet', price: 6000, color: 'silver'},
    {name: 'phone', price: 23000, color: 'silver'},
    {name: 'mouse', price: 15000, color: 'silver'},
];

// map
const price = products.map(product => product.price)
// console.log(price);

// forEach
// products.forEach(product => console.log(product.name))

// filter
const cheapest = products.filter(product=> product.price < 30000);
// console.log(cheapest);
const specific = products.filter(product=> product.name.includes('o'));
console.log(specific);


// find
const findFirst = products.find(product=> product.price < 30000);
// console.log(findFirst);

