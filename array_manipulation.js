// Task 1: Adding and Removing Elements

// Create an array containing some initial elements
let fruits = ['apple', 'banana', 'orange'];

// Use the push method to add a new element to the end of the array
fruits.push('grape');
console.log('After push:', fruits); // ['apple', 'banana', 'orange', 'grape']

// Use the pop method to remove the last element from the array
let removedFruit = fruits.pop();
console.log('After pop:', fruits); // ['apple', 'banana', 'orange']
console.log('Removed fruit:', removedFruit); // 'grape'

// Task 2: Sorting Arrays

// Create an array of numbers in random order
let numbers = [3, 1, 5, 2, 4];

// Use the sort method to sort the array in ascending order
numbers.sort((a, b) => a - b);
console.log('Sorted numbers:', numbers); // [1, 2, 3, 4, 5]

// Task 3: Applying Array Methods

// Create an array of numbers
let moreNumbers = [3, 1, 5, 2, 4];

// Use the map method to double each number in the array
let doubledNumbers = moreNumbers.map(num => num * 2);
console.log('Doubled numbers:', doubledNumbers); // [6, 2, 10, 4, 8]

// Use the filter method to filter out even numbers from the array
let oddNumbers = moreNumbers.filter(num => num % 2 !== 0);
console.log('Odd numbers:', oddNumbers); // [3, 1, 5]

// Use the reduce method to calculate the sum of all numbers in the array
let sum = moreNumbers.reduce((acc, num) => acc + num, 0);
console.log('Sum of numbers:', sum); // 15

// Exploring the spread and rest operators

// Spread operator to create a new array with additional elements
let moreFruits = ['kiwi', ...fruits, 'mango'];
console.log('More fruits:', moreFruits); // ['kiwi', 'apple', 'banana', 'orange', 'mango']

// Rest operator to capture remaining elements in an array
let [firstFruit, secondFruit, ...remainingFruits] = fruits;
console.log('First fruit:', firstFruit); // 'apple'
console.log('Second fruit:', secondFruit); // 'banana'
console.log('Remaining fruits:', remainingFruits); // ['orange']
