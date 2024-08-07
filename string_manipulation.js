// Task 1: Obtaining String Length

// Create a string with some text content
let message = "Hello, World!";

// Use the length property to obtain the length of the string
let messageLength = message.length;
console.log('Length of the message:', messageLength); // 13

// Task 2: Converting Cases

// Create a string with mixed-case content
let text = "Hello, World!";

// Use the toUpperCase method to convert the string to uppercase
let upperText = text.toUpperCase();
console.log('Uppercase text:', upperText); // "HELLO, WORLD!"

// Use the toLowerCase method to convert the string to lowercase
let lowerText = text.toLowerCase();
console.log('Lowercase text:', lowerText); // "hello, world!"

// Task 3: Extracting Substrings

// Create a string with some text content
let sentence = "The quick brown fox jumps over the lazy dog";

// Use the substring method to extract a substring from the original string
let substring = sentence.substring(10, 19);
console.log('Extracted substring:', substring); // "brown fox"

// Task 4: Splitting Strings

// Create a string containing multiple words separated by spaces
let wordsSentence = "The quick brown fox";

// Use the split method to split the string into an array of words based on the space delimiter
let wordsArray = wordsSentence.split(' ');
console.log('Array of words:', wordsArray); // ["The", "quick", "brown", "fox"]
