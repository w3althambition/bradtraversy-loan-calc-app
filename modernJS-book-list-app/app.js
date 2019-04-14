const bookForm = document.getElementById('book-form');

// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

UI.prototype.addBookToList = (book) => {
  const list = document.getElementById('book-list');
  // Create a tr element.
  const row = document.createElement('tr');
  // Insert cols.
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">x</a></td>
  `;

  list.appendChild(row);
};

// Clear Fields
UI.prototype.clearFields = () => {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

// Event Listeners
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Get form values.
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Clear all fields.
  ui.clearFields();

  // Add book to list.
  ui.addBookToList(book);
});
