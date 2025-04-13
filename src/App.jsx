import React, {useState, useSyncExternalStore} from "react";
import BookList from "./components/BookList";

//root component of the app 
function App() {
  // gobal state to hold the list of books 
  const [books, setBooks] = useState([]);

  // function to remove a book by its ID 
  const removeBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <main>
      <h1>Book Explorer</h1>
      {/*Pass state and handlers down to the BookList component*/}
      <BookList books={books} setBooks={setBooks} onRemove={removeBook} />
    </main>
  )
}
export default App; 