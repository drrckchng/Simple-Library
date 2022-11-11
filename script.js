// Initialize library array
let myLibrary = [];

// Book object constructor
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.info = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.read}`
}

// Add book to library array
function addBookToLibrary(title, author, pages, readStatus) {
  const book = new Book(title, author, pages, readStatus)
  myLibrary.push(book);
}

// Display each book
function displayBooks() {
  myLibrary.forEach(element => {
    console.log(element);
  });
}

// Add example books
addBookToLibrary('Crime and Punishment', 'Fyodor Dostoevsky', 671, false);
addBookToLibrary('The Plague', 'Albert Camus', 308, false);
addBookToLibrary('The Divine Comedy', 'Dante Alighieri', 798, false);
addBookToLibrary('Kafka on the Shore', 'Haruki Murakami', 467, true);
addBookToLibrary('Hyperion', 'Dan Simmons', 500, true);

displayBooks();
