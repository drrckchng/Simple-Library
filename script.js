// Initialize library array
let myLibrary = [];

// Book object constructor
class Book {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
}

// Create method on Book object prototype
Book.prototype.info = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.read}`
}

// Setter for index attribute
Book.prototype.setIndex = function(i) {
  this.index = i
}

// Function that will set index attribute of all Book objects
function setArrayIndex() {
  let i = 0;
  myLibrary.forEach(function(object) {
    object.setIndex(i);
    i++;
  });
}

// Grab book submit form
const bookForm = document.getElementById("submit-form");

// Grab add book button and add click listener
const addBookButton = document.getElementById("add-book");
addBookButton.addEventListener("click", function() {
  bookForm.classList.add("show");
})

// Grab submit button and add click listener
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", userInput);

// Function to run on button click
function userInput(event) {
  bookForm.classList.remove("show");
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
    updateDisplay();
  } else {
    alert("Form is not complete!");
  }
}

// Verify valid form entry
function checkForm(title, author, pages, read, notRead) {
  // If all form elements are valid (not empty) return true
  // Else, return false
  if(title !== ""
    && author !== ""
    && pages !== ""
    && ((read === false && notRead === true) || (read === true && notRead === false))
  ) {
    return true;
  } else {
    return false;
  }
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

    // Display attributes
    // loop through keys in each Book object
    for(const key in element) {
      // ignore info() method
      if(element.hasOwnProperty(key)) {
        if(key === "index") {
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";
          deleteButton.classList.add("delete-button");
          deleteButton.addEventListener("click", function() {
            myLibrary.splice(element.index, 1);
            updateDisplay();
          });
          card.appendChild(deleteButton);
        } else if(key === "read") {
          const readButton = document.createElement("button");
          if(element.read === true) {
            readButton.textContent = "Read";
            readButton.classList.add("book-read");
          } else {
            readButton.textContent = "Not Read";
            readButton.classList.add("book-not-read");
          }
          readButton.addEventListener("click", function() {
            if(element.read === true) {
              element.read = false;
            } else {
              element.read = true;
            }
            updateDisplay();
          });
          card.appendChild(readButton);
        } else {
          const div = document.createElement("div");
          const infoCapitalized = key.charAt(0).toUpperCase() + key.slice(1);
          div.textContent = infoCapitalized + ": " + element[key];
          card.appendChild(div);
        }
      }
    }
    cardWrapper.append(card);
  });
}

// Group function calls
function updateDisplay() {
  clearBooks();
  setArrayIndex();
  displayBooks();
}

// Add example books
addBook("Crime and Punishment", "Fyodor Dostoevsky", 671, false);
addBook("The Plague", "Albert Camus", 308, false);
addBook("The Divine Comedy", "Dante Alighieri", 798, false);
addBook("Kafka on the Shore", "Haruki Murakami", 467, true);
addBook("Hyperion", "Dan Simmons", 500, true);

updateDisplay();
