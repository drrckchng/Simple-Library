let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return `Title: ${title}, Author: ${author}, Pages: ${pages}, Read: ${read}`
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
}

addBookToLibrary(new Book('Crime and Punishment', 'Fyodor Dostoevsky', 671, false));
addBookToLibrary(new Book('The Plague', 'Albert Camus', 308, false));
addBookToLibrary(new Book('The Divine Comedy', 'Dante Alighieri', 798, false));
addBookToLibrary(new Book('Kafka on the Shore', 'Haruki Murakami', 467, true));
addBookToLibrary(new Book('Hyperion', 'Dan Simmons', 500, true));

console.log(myLibrary);

