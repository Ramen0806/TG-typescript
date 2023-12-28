//Our own example using interface
function clone(source) {
    return Object.apply({}, source);
}
const a = { id: 1, name: 'John' };
const b = clone(a);
const book = { title: 'Hobbit', year: 2000 };
// const cloneOfbook = clone(book); //Error => Book !==user
/**
 * Solution => Generics
 */
function clone2(source) {
    return Object.apply({}, source);
}
;
const toyota = { brand: 'Toyota', year: 2006 };
const cloneOfCar = clone2(toyota);
const phone = { company: 'Apple', model: '15', price: '$1099' };
const cloneOfPhone = clone2(phone);
function getMax(arr) {
    return arr;
}
/**
 * Multiple generic parameter Types
 */
function clone3(source) {
    return Object.apply({}, source);
}
;
function clone4(source) {
    return Object.apply({}, source);
}
;
//FUNCTION maxNumber(arr) {return number}
