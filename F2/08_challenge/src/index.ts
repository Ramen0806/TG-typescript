
interface Book {
  id: number;
  title: string;
  status: 'done' | 'in-progress' | 'read';
  completedOn?: Date; 
}

const books: Book[] = [
  { id: 1, title: "Lion King", status: "done", completedOn: new Date("2023-12-26") },
  { id: 2, title: "Hobbit", status: "in-progress" },
  { id: 3, title: "Don Quixote", status: "read" },
];

function addBookToLibrary(book: string): Book {

  const id = getNextId(books);

  const newBook: Book = {
    id,
    title: book,
    status: "read",
  };

  books.push(newBook);

  return newBook;
}

function getNextId(items: {id: number}[]): number {
  return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1;
}

const newBook = addBookToLibrary("City of Bones");

console.log(JSON.stringify(newBook));