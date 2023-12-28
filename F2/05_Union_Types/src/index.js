// Union Type Example //
// const statusCode = 200; //'200'
let statusCode;
statusCode = 200; //works
statusCode = '200'; //works
const primaryUser = {
    id: 1,
    name: 'John',
    status: 'active'
};
const inactiveUser = {
    id: 2,
    name: 'Joe',
    status: 'inactive'
};
const activeUser1 = {
    id: 3,
    name: 'Joel',
    status: 'new'
};
console.log(activeUser1);
