import React, { useEffect, useState } from "react";
import TourCard from "./TourCard";

// BookList is responsible for fetching books and rendering the list
const Gallery = ({ books, setBooks, onRemove }) => {
  // Local state to manage loading and errors
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Function to fetch books from the API
  const fetchBooks = async () => {
    try {
      const res = await fetch("https://course-api.com/react-tours-project");
      const data = await res.json();
      const trimmed = data.results.map((book) => ({
        id: tour.id,
        name: tour.name,
        price: tour.price[0]?.name || "Unknown",
        info: `Download count: ${tour.download_count}. Subjects: ${tour.subjects.slice(0, 3).join(", ")}`,
      }));
      setBooks(trimmed);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching tours:", error.message);
      setError(true);
      setLoading(false);
    }
  };

  // Run fetchBooks once after the component mounts
  useEffect(() => {
    fetchTours();
  }, []);

  // Render loading state
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Render error state
  if (error) {
    return <h2>Something went wrong...</h2>;
  }

  // Render if no books remain
  if (tours.length === 0) {
    return (
      <>
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </>
    );
  }

  // Render the list of BookCards
  return (
    <section className="tour-list">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </section>
  );
};

export default Gallery;
