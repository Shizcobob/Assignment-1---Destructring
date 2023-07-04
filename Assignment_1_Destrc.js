const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// Out come = 
// Tesla
// Mercedes


const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

// Output = 
// Name is undefined outside of the object
// Other name = Elon


const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// Output =
// 1 = 12345
// 2 = undefined - Hased password outside of person object

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; 
// 2
const [,,,second] = numbers;
// 5
const [,,,,,,,,third] = numbers;
// 2
//Predict the output
console.log(first == second);
console.log(first == third);

// output = False, 2 == 5
// output = True, 2 == 2

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
// output= Value
console.log(secondKey);
// = [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);
//  = 1
console.log(willThisWork);
//  = 5 This works because line 62 is pulling the key out and the next line is referring to that variable and not the object itself. If 62 is deleted it wwill be undefined







