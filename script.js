// Initialize library array
let myLibrary = [];

// Book object constructor
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

// Create method on Book object prototype
Book.prototype.info = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.read}`
}

// Add book to library array
function addBook(title, author, pages, readStatus) {
  const book = new Book(title, author, pages, readStatus)
  myLibrary.push(book);
}

// Display each book
function displayBooks() {
  const cardWrapper = document.getElementById("card-wrapper")
  myLibrary.forEach(element => {
    const card = document.createElement("div");
    card.classList.add("card");

    // loop through keys in each Book object
    for(const key in element) {
      // ignore info() method
      if(element.hasOwnProperty(key)) {
        const div = document.createElement("div");
        div.textContent = element[key];
        card.appendChild(div);
      }
    }
    cardWrapper.append(card);
  });
}

function clearBooks() {
  selectBooks().forEach(book => {
    book.remove();
  });
}

function selectBooks() {
  return document.querySelectorAll(".card");
}

const submitButton = document.getElementById("submit");
// submitButton.preventDefault();

submitButton.addEventListener("click", function () {
  const userTitle = document.getElementById("book-title").value;
  const userAuthor = document.getElementById("author-name").value;
  const userPages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  let readStatus = false;
  if (read === true) {
    readStatus = true;
  }
  addBook(userTitle, userAuthor, userPages, readStatus);
});



// Add example books
addBook("Crime and Punishment", "Fyodor Dostoevsky", 671, false);
addBook("The Plague", "Albert Camus", 308, false);
addBook("The Divine Comedy", "Dante Alighieri", 798, false);
addBook("Kafka on the Shore", "Haruki Murakami", 467, true);
addBook("Hyperion", "Dan Simmons", 500, true);

displayBooks();
