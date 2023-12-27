/* Primitive Types */

let x = 5;
// let x; // Variable 'x' implicitly has 'any' type, but a bettet type may be inferred from usage
//let x: number; // It works

let y: string;
let z: boolean;

y = 'Hello'
//y= 1234; // Type 'number' is not assignable to type string
z = true;
//z = 'true'; //Type 'string' is not assignable to type 'boolean'

/* Other Types */

let a: Date; // date type
let b: string []; // array of strings
let c: number []; //array of numbers
let d: {id: number, name: string}; //object
let f: { authoer: string, book: {title: string, year: number}} //nested object

c = [1,2,3]; 
// c = [1,'2',3] // Type 'string' is not assignable to type 'number'

d = { id: 1, name: "John" };
//d = { id: 1, name: true }; // Type 'boolean' is not assignavle to type 'string'

//b = 'Hello';
 b = 'hello' as any; // type casting (temporaly overrides the type that we declared for this line)
