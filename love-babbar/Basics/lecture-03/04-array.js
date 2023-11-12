// Arrays 
// Adding new Elements 
// Finding Elements 
// Removing Elements 
// splitting Elements 
// combining Elements

// creation of array  
let numbers = [1, 2 ,4 ,5, 'gagan' ]
// ie in js array contain homo as well as hetero items 

// access item from Array
console.log(numbers)

// Insertion of an item in an array
// end - push 
numbers.push(9);
console.log(numbers)

// middle - splice 
// numbers.splice(index Node.  , delete ,insert )
numbers.splice(2 ,0, 10);
console.log(numbers)

// end - unshift 
numbers.unshift(7);
console.log(numbers)

numbers.shift();
console.log(numbers)