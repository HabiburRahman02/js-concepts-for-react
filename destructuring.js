// array des....
const dogs = ['pixcas', ' nexas', 'quana', 'fuscis'];
const [dog1, dog2, ...rest] = dogs;
// console.log(dog1, dog2, rest);

// object des.....
const company = {
    name: 'Habib software ltd.',
    location: 'Dhaka',
    employee: 150,
    branch: ['mirpur', 'badda', 'uttara'],
    brandValue: {
        firstPrice: '34B',
        secondPrice: '23B'
    }
}

const { name, employee } = company;
const [one,two,three] = company.branch
const {firstPrice} = company.brandValue
console.log(firstPrice);
