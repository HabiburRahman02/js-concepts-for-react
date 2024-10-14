//1. let, const
const myName = 'habib'
let age = 18;
age = 30;
console.log(age);

//2.  conditions <, >, >=, <=, ===, !==
// multiple conditions &&, ||

if (myName === 'habib' || age === 45) {
    console.log('something');
}
else if (age > 40) {
    console.log('bacca polapain');
}
else {

}

// 3. arrays
const ages = [23, 46, 43, 56, 34];
for (const age of ages) {
    console.log(age);
}

// 4. array declare
ages[0] = 111;
ages.push(222)
console.log(ages);


// 5. function
function multi(n1, n2) {
    return n1 * n2
}

console.log(multi(2,6));

// 6. objects
const person ={
    name: 'adu vai',
    age: 34,
    location: 'dhaka',
}
console.log(person.location);
console.log(person['age']);
const name = 'name';
console.log(person[name]);