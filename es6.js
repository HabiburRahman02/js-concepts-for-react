const person = {
    name: 'adu vai',
    age: 34,
    location: 'dhaka',
}

const text = `my name is ${person.name} and age ${person.age}`;
console.log(text);


// arrow func
const noParameter = () => 10;
const oneParameter = num => num * 10;
const moreParameter = (num1, num2) => num1 + num2;
const moreMath = (a, b, c) => {
    const sum = a + b + c;
    return sum;
}


// spread operator
const numbers = [23, 45, 21, 37];
const newNumbers = [...numbers, 99,122];
numbers.push(100);

console.log(numbers);
console.log(newNumbers);