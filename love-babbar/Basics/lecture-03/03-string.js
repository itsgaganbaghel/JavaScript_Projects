// String - are of 2 types ie primitive and Object
// Primitive string is a sequence of characters enclosed by double or single quotes .
// Object type string has properties like charAt , indexOf , slice , substring , concat , replace , match , search , split , toLower

// There are String Object can be created by new keyword and String Constructor 
let str = new String("My name is Priyansh");
console.log(str);
console.log(typeof str);

// Properties
// #1 - Length 
console.log(str.length);

// Methods 
// #1 - lowercase 
console.log(str.toLocaleLowerCase());

// #2 - uppercase 
console.log(str.toUpperCase()); 

// #3 - at 
console.log(str.charAt(4));

// #4 - charCodeAt 
console.log(str.charCodeAt(4));

// #5 - startwith 
console.log(str.startsWith("My"));

// #6 - endsWith 
console.log(str.endsWith("Priyansh"));

// #7 - replace 
console.log(str.replace("Priy","Riy"));

let a = "  Devil  ";
// #8 - trim 
console.log(a);
console.log(a.trim());

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

// Template literals - use for rearrange the sentence line patters, but we do not add \n , etc directly.
// we can ue '\' for new line  as well as we can use template literal by adding back slash. (` `)
let mssging = `This is a example for showing the use of 
template literals `;
console.log(mssging);