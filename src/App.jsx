import React, {useState, useSyncExternalStore} from "react";
import Gallery from "./components/Gallery";
import Style from "./style.css";
//root component of the app 
function App() {
  // gobal state to hold the list of books 
  const [tours, setTours] = useState([]);

  // function to remove a book by its ID 
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      <h1>Tour Comparison</h1>
      {/*Pass state and handlers down to the BookList component*/}
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </main>
  )
}
export default App; 