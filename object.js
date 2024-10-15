const person = {
    name: 'adu vai',
    age: 34,
    location: 'dhaka',
}
// console.log(person);
const personStr = JSON.stringify(person);
// console.log(personStr);

const personParse = JSON.parse(personStr);
// console.log(personParse);

// key and values
const keys = Object.keys(person);
// console.log(keys);
const values = Object.values(person);
// console.log(values);

// fetch
// fetch('')
//     .then(res => res.json())
//     .then(data => console.log(data));

// async await
// const func = async () => {
//     const res = await fetch('');
//     const data = await res.json();
//     console.log(data);
// }

const products = [
    { name: 'laptop', price: 45000, color: 'silver' },
    { name: 'tablet', price: 6000, color: 'silver' },
    { name: 'phone', price: 23000, color: 'silver' },
    { name: 'mouse', price: 15000, color: 'silver' },
];
// console.log(products);

const item = {name: 'bike', price: 77000, color: 'black'}
const newProducts = [...products, item];
// console.log(newProducts);


// filter
const getDataWithoutPhone = products.filter(pd=> pd.name !== 'phone');
console.log(getDataWithoutPhone); 