const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['reading', 'traveling', 'swimming'],
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA'
    },
    }

console.log(person.firstName, person.lastName);  // Output: John

console.log(person.hobbies[1]);  // Output: traveling

const { street, city } = person.address;
console.log(street, city);  // Output: 123 Main St Anytown