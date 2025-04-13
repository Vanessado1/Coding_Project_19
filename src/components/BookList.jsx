import React, {useEffect, useState} from "react";
import BookCard from "./BookCard";

// BookList is responsible for fetching books and rending the list 

const BookList = ({books, setBooks, onRemove}) => {
    // Local state to manage loading and errors 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Function to fetch books from the API

   const fetchBooks = async () => {
    try {
        const res = await fetchBooks("https://gutendex.com/books/");
        // Map the API data to only the field we need 

        const trimmed = data.results.map((book) => ({
            id: book.id,
            title: book.title,
            author: book.authors[0]?.name || "Unknown",
            description: `Download count: ${book.download_count}. Subjects ${book.subjects.slice(0,3).join(",")}`,
        }));
        setBooks(trimmed); // Save data to global State
        setLoading(false); // Set loading to false
    } catch (error) {
        setError(true); // if fetch fails show error 
        setLoading(false); // Set loading to false 
    
    }
    }
};

// run fetchBooks once after the component mounts 
useEffect (() => {
    fetchBooks();
}, []);

// render loading state 

if(loading) {
    return <h2>Loading...</h2>;
};
// render error state
if(error) {
    return<h2>Something went wrong...</h2>;
};
// render if no book remains 
if(book.length === 0) {
    return<h2>No books left</h2>;
    <button onClick={fetchBooks}>Refresh</button>
};
// render the list of BookCards
return (
    <section className="book-list">
        {books.map((book) => {
            return (
                <BookCard 
                key={book.id}
                {...book} // spread operator to pass all book properties 
                onRemove={onRemove} // pass the remove function 
                />
            );
        })}
    </section>
);

export default BookList;