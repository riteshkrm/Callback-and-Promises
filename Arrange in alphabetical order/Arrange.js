function processBookTitles(books, callback) {
  // Use map function to extract titles from the list of books
  const titles = books.map((book) => book.title);

  // Sort the titles in alphabetical order
  const sortedTitles = titles.sort();

  // Pass the sorted titles to the callback function
  callback(sortedTitles);
}

// Example list of books
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

// Example callback function to log titles to the console
function logTitles(titles) {
  console.log("Sorted book titles:");
  titles.forEach((title) => console.log(title));
}

// Call the function with the books list and the callback function
processBookTitles(books, logTitles);
