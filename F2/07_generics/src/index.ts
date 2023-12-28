


//Our own example using interface

interface User {
  id: number;
  name: string;
}

function clone(source: User): User {
  return Object.apply({}, source)
}

const a:User = {id:1, name:'John'}
const b = clone(a);

/**
 * What if i want to clone different object?
 */

interface Book {
  title: string;
  year: number;
}


const book = {title:'Hobbit', year: 2000}
// const cloneOfbook = clone(book); //Error => Book !==user

/**
 * Solution => Generics
 */

function clone2<T>(source: T): T {
  return Object.apply({}, source)
};

const toyota = {brand: 'Toyota', year: 2006};
const cloneOfCar = clone2(toyota);

const phone = {company: 'Apple', model:'15',price:'$1099'};
const cloneOfPhone = clone2(phone);

function getMax<T>(arr: T[]): T[]{
  return arr;
}

/**
 * Multiple generic parameter Types
 */

function clone3<T1, T2>(source: T1): T2 {
  return Object.apply({}, source)
};

interface User1 {
  id: number;
  name: string;
}

interface User2 {
  id: number;
  name: string;
  status: string;
}

interface User3 {
  address: string; 
  title: string;
}

function clone4<User1, User2>(source: User1): User2 {
  return Object.apply({}, source)
};
//FUNCTION maxNumber(arr) {return number}


// const x = clone3({id:1, name:'John'}); //Unknown type
const x = clone3<User1,User2>({id:1, name:'John'}); //return is User2

const y = clone3<User1,User3>({id:1, name:'John'}); //return is User3




