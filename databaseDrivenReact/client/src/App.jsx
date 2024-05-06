import { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";

export default function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
  }, []);
  async function getReviews() {
    const response = await fetch("http://localhost:8080/reviews");
    const data = await response.json();
    setReviews(data);
  }
  return (
    <div>
      <h1>Theatre Reviews</h1>
      {reviews.map((review) => {
        return (
          <div key={review.id}>
            <h2>
              {review.userName} gave {review.playName} a score of{" "}
              {review.playScore}
            </h2>
            <ul>
              Genres:{" "}
              {review.genres.map((genre) => {
                return <li key={genre}>{genre}</li>;
              })}
            </ul>
          </div>
        );
      })}
      <ReviewForm />
    </div>
  );
}
