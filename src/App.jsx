import React, {useState, useSyncExternalStore} from "react";
import Gallery from "./components/Gallery";

//root component of the app 
function App() {
  // gobal state to hold the list of books 
  const [tours, setBooks] = useState([]);

  // function to remove a book by its ID 
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      <h1>Book Explorer</h1>
      {/*Pass state and handlers down to the BookList component*/}
      <Gallery tours={tours} setBooks={setBooks} onRemove={removeTour} />
    </main>
  )
}
export default App; 