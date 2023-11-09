//                          lecture - 03

// maths built in methods - max , mix abs , round etc 

// String - are of 2 types ie primitive and Object
// Primitive string is a sequence of characters enclosed by double or single quotes .
// Object type string has properties like charAt , indexOf , slice , substring , concat , replace , match , search , split , toLower

// primitive string 
let name = 'gagan'; 
// primitive string convert into Object
// name. 
let lastname = new String('baghel');
// we can perform many functionalities in it that is ,
// lastname.length
// lastname.includes
// lastname.replace (before , after)
// lastname[index-No.]

let mssg1 = "this is my 3rd js video for learning basics of js."
let word = mssg1.split(' ');
console.log(word);

// Templa literals - use for rearrange the sentence line patters, but we do not add \n , etc directly.
// we can ue \ for new line  as well as we can use template literal by adding back slace. (` `)
let mssging = `This is a example for showing the use of 
template literals `;
console.log(mssging);

// date in js - we can directly reffer from internet - mdn 
// in this , indexing is start from 0 for month
// get  - output
// Set - input 
// for example 
// let today = new Date();
// console.log(today);

// Arrays 
// Adding new Elements 
// Finding Elements 
// Removing Elements 
// splitting Elements 
// combining Elements

// creation of array  
let numbers = [1, 2 ,4 ,5, 'gagan' ]
// ie in js array contain homo as well as heterogrnious items 

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

// Searching - 
// primitive  - we use inddexof & includes
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
// good practise 
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
// callback function is a function passed into another function as an argwnent, which is then invoked
// inside the outer functim to sorne kind Of routine action.

// normal way / notation 
let course = courses.find(function(course){
    return course.name === 'gagan'
})  

console.log(course);

// arrow function 
// remove function add => like (course) => 
// if i/p parameter is single then remove () like course =>
// if there is only single line of code then remove return & {} 
// like course => course.name === 'gagan'

let courseNew = courses.find(courseNew => course.name === 'gagan');

console.log(courseNew)

// Removing element 
let array = [1,2,3,4,5,6,7]
// end  - pop ()
array.pop();
console.log(array)

// begining - shift ()
array.shift();
console.log(array)

// middle - splice ()
array.splice(2,1);
console.log(array)

// Empty array 
let arrayNew = array ;
arrayNeww = [] ;
console.log(arrayNew)
// in this the array is declared to blank [] and the original values are remove by garbage collector . 
// this is not a appropriate method of empty the array 
// we use new method that is  
array.length=0;
console.log(array)

// We have another method that is splice();
array.splice(0,array.length)
console.log(array)

// combining & SLicing Arrays - primitive 
let array1 =[1,2,3,4,5]
let array2 =[6,7,8,9,10]
// 1st method - .concat
let combinedArray = array1.concat(array2);
console.log(combinedArray)
// 2nd method - Spread operator  (...)
let combined = [...array1 , ...array2];
console.log(combined)

// slice - slice(starting index , ending index); // ending index -1 tak hi print hota hai 
let slicedArray = array1.slice(1,3).concat(array2.slice(2,5));
// let slicedArray = array1.slice(1,3).concat(array2.slice(2)); // full slicing 
console.log(slicedArray)

// 2nd Method 
let slicedArray1 = array1.slice(2).concat([...array2].slice(2))
console.log(slicedArray1)

// in objects - H/w 

// Iterating an Array - we use for-of loop & for-each for iterating 
let arr = [3,5,6];
for(let key of arr){
    console.log(key*2)
};
arr.forEach(function(key){console.log(key/2);});

// convert into arrow function 
arr.forEach(value => console.log(value/2));

// Joining Arrays 
let joinArr = ['I','love', 'to','code'];
let joined = joinArr.join(' ');
console.log(joined)

// spilit an array 
let mssg = "Now I love to code in JS";
let splitMsg = mssg.split(" ");
console.log(splitMsg)

// join 
let joinMssg = splitMsg.join(' ');
console.log(joinMssg)

// Reverse an Array
let reverseArr = [1,2,3,4,5];
reverseArr.reverse()
console.log(reverseArr)

// sorting Arraay 
let sortArr = [5,7,8,9,1,3];
sortArr.sort();
console.log(sortArr);

// Filtering Array
let filterArr = [1,2,3,4,5,0,-1,-2,-3,-4,-5];
let no = filterArr.filter(function(value){
    return value >= 0 ;
});
console.log(no);
// convert into arrow function
let num = filterArr.filter(value => value >=0);
console.log(num);

// Mapping Arrays - agar apko map ki each element of array to something else. ie., somthing is connected with some value 
let mapArray = [20,35,60,78,10];
let items = mapArray.map(function(value){
    return 'student_marks: ' + value;
})
console.log(items);
// convert into arrow function
let item = mapArray.map(value => 'student-marks: ' + value);
console.log(item);

// value - kuch bhi likh shakte hai . 
let mapObjCreation = num.map(function(value){
    return {poitive_numbers : value ,
            double_numbers  : value * 2 };
}) ;
console.log(mapObjCreation);

// arrow function : 
let mapObjArrowFunction = num.map(value => {
    return {poitive_numbers : value ,
        double_numbers  : value * 2 };
});
console.log(mapObjArrowFunction);