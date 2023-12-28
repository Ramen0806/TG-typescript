// Union Type Example //

// const statusCode = 200; //'200'
let statusCode: number | string;

statusCode = 200; //works
statusCode = '200' //works



//-- Example --//

type StatusCode = 'active' | 'inactive' | 'new';

interface User {
  id: number;
  name: string;
  status: StatusCode;
}


const primaryUser: User = {
  id: 1,
  name:'John',
  status: 'active'
}

const inactiveUser: User = {
  id: 2,
  name:'Joe',
  status: 'inactive'
}

const activeUser1: User = {
  id: 3,
  name:'Joel',
  status: 'new'
}


console.log(activeUser1)
