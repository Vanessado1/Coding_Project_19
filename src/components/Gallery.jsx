import React, { useEffect, useState } from "react";
import TourCard from "./TourCard";

// BookList is responsible for fetching books and rendering the list
const Gallery = ({ tours, setTours, onRemove }) => {
  // Local state to manage loading and errors
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Function to fetch books from the API
  const fetchTours = async () => {
    try {
      const res = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project");
      const data = await res.json();
      const trimmed = data.map((tour) => ({
        id: tour.id,
        name: tour.name,
        price: tour.price || "Unknown",
        info: tour.info,
        image: tour.image, // Include image for display
      }));
      setTours(trimmed);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching tours:", error.message);
      setError(true);
      setLoading(false);
    }
  };
  
  // Run fetchTours once after the component mounts
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

  // Render if no tours remain
  if (tours.length === 0) {
    return (
      <>
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </>
    );
  }

  // Render the list of TourCards
  return (
    <section className="tour-list">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </section>
  );
};

export default Gallery;
