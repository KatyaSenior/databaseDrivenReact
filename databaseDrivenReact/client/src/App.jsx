import { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
  }, []);
  async function getReviews() {
    const response = await fetch(
      "https://databasedrivenreact.onrender.com/reviews"
    );
    const data = await response.json();
    setReviews(data);
  }
  return (
    // <BrowserRouter>
    <div>
      <h1>Theatre Reviews</h1>
      {reviews.map((review) => {
        return (
          <div key={review.id}>
            <h2>
              {review.userName} gave {review.playName} a score of{" "}
              {review.playScore}
            </h2>
            {/* <ul>
              Genres:{" "}
              {review.genres.map((genre) => {
                return <li key={genre}>{genre}</li>;
              })}
            </ul> */}
          </div>
        );
      })}
      <ReviewForm />
    </div>
    //   <Link to="/review">Write a Review</Link>
    //   <routes></routes>
    // </BrowserRouter>
  );
}
