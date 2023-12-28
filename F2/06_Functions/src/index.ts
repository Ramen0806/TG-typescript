// Simple Function Example

//Argument is type any, return type void. Implicit
function great(name) {
  console.log(`Hello, ${name}!`);
}

//Argument is type any, return type void. Explicit
function great1(name: any): void  {
  console.log(`Hello, ${name}!`);
}
//Argument is type any, return type void. Explicit
function great2(name: any): void  {
  //return 'Hello'; //Error
  console.log(`Hello, ${name}!`);
}

//Argument is type string, return type string. Explicit
function great3(name: string): string  {
  return `Hello, ${name}!`;
}

//Ideal
function great4(name: string)  {
  console.log(`Hello, ${name}!`);
}


//Rest and Spread Operator

//Issue here
function maxNumber(...nums) {
  return Math.max(...nums)
}

maxNumber(1,2,3); //3
maxNumber('1',2,3); //3

//Fix
function maxNumber2(...nums: number[]): number {
  return Math.max(...nums)
}

// const nums: number[] = [1,2,3];

//Fix by narrowing
function maxNumber3(...nums: number[]): number {
  //loop and check type of each element in numd
  for (let i=0; i<nums.length;i++) {  
    if (typeof nums[i] !== "number") {
      return Math.max(...nums)
  }
}}


//Our own example using interface

interface User {
  id: number;
  name: string;
}
//Issue
function clone(source: User) {
  return Object.apply({}, source)
}

const a:User = {id:1, name:'John'}

const b = clone(a);

//Fix
function clone2(source: User): User {
  return Object.apply({}, source)
}

const a2:User = {id:1, name:'John'}

const b2 = clone2(a2);


