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

addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 295, false));

console.log(myLibrary);

