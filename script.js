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

// Select all books and returns them in an array
function selectBooks() {
  return document.querySelectorAll(".card");
}

// Clear listed books
function clearBooks() {
  selectBooks().forEach(book => {
    book.remove();
  });
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


// Grab submit button and add click listener
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", userInput);

// Function to run on button click
function userInput(event) {
  newUserBook();
  event.preventDefault(); // Prevents form from being submitted
}

// Function that is run upon submit click
function newUserBook() {
  const userTitle = document.getElementById("book-title").value;
  const userAuthor = document.getElementById("author-name").value;
  const userPages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  const notRead = document.getElementById("not-read").checked;

  // If form is valid add book
  if(checkForm(userTitle, userAuthor, userPages, read, notRead)){
    let readStatus = false;
    if (read === true) {
      readStatus = true;
    }
    addBook(userTitle, userAuthor, userPages, readStatus);
    clearBooks();
    displayBooks();
  } else {
    console.log("Error in form");
  }
}

// Verify valid form entry
function checkForm(title, author, pages, read, notRead) {
  // If all form elements are valid (not empty) return true
  // Else, return false
  if(
    title !== ""
    && author !== ""
    && pages !== ""
    && (read === false && notRead === true) || (read === true && notRead === false)
  ) {
    return true;
  } else {
    return false;
  }
}

// Add example books
addBook("Crime and Punishment", "Fyodor Dostoevsky", 671, false);
addBook("The Plague", "Albert Camus", 308, false);
addBook("The Divine Comedy", "Dante Alighieri", 798, false);
addBook("Kafka on the Shore", "Haruki Murakami", 467, true);
addBook("Hyperion", "Dan Simmons", 500, true);

displayBooks();
