// Type alias

type Product = {
  title: string;
  price: string;
  quantity: number;
}

const cake: Product = {
  title: 'Chocolate Cake',
  price:'$25',
  quantity: 10
}

const ps5 = {
  title: 'PS5',
  price: '$395',
  quantity: 5
}

// Example with interface

interface User {
  id: number;
  name: UserName;
  hobbies: Hobbies[];
}

type UserName = string;
type Hobbies = {type: string, name: string}
const user: User = {
  id: 1,
  name: "John",
  hobbies: [
    {type: 'sport', name:'skiing'},
    {type: 'education', name:'reading'}
  ] 
}

//Extending Type Alias

type Animal = {
  breed: string,
}

type Dog = Animal & { 
  name: string
}

const dog: Dog = {
  name: 'Balii',
  breed: 'Chihuaha'
}