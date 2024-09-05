
const myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookInfo = function() {
        return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.read} pages read.`
    }
}


function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooks();
}


function displayBooks() {
    const libraryDiv = document.getElementById("library");
    libraryDiv.innerHTML = ""; 

    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.textContent = book.bookInfo();
        libraryDiv.appendChild(bookCard);
    });
}


addBookToLibrary('Book 1', 'Author 1', 100, 50);
addBookToLibrary('Book 2', 'Author 2', 200, 100);
addBookToLibrary('Book 3', 'Author 3', 150, 75);
