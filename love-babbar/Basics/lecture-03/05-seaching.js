// Searching - 
// primitive  - we use indexof & includes
// console.log(numbers);
// o/p - 7 
// console.log(numbers.indexOf(15));
// o/p - -1 - if no. is not exit in the array 

// check whether a No. is exit in an array or not .No
// basic method is  
// if(numbers.indexOf(4) != -1)
// {
//     console.log("Present");
// }
// good practice 
console.log(numbers.includes(4)); 

// console.log(numbers.indexOf(9, 6) );

// for reference - we use callback function
let courses = [
    {no:1 , name:"gagan"} ,
    {no:2 , name:"baghel"}
]

console.log(courses);

console.log(courses.indexOf({no:1 , name:"gagan"}));
// o/p = -1 
console.log(courses.includes({no:1 , name:"gagan"}));
// o/p = false

// we use callback function - 
// callback function is a function passed into another function as an argument, which is then invoked
// inside the outer function to some kind Of routine action.

// normal way / notation 
let course = courses.find(function(course){
    return course.name === 'gagan'
})  

console.log(course);