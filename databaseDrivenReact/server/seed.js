// import { populate } from "dotenv"

// SQL EDITOR USED IN SUPABASE
// THIS IS JUST COPY PASTED FROM THERE

// Add Genres:
// INSERT INTO genre_junction (review_id, genre_id) VALUES

// (1, 1),
// (1, 4),
// (1, 5),
// (2, 2),
// (2, 3),
// (3, 1),
// (3, 6),
// (4, 2),
// (4, 5),
// (4, 7),
// (5, 1),
// (5, 4),
// (5, 5),
// (5, 6)

// Create Tables:
// CREATE TABLE IF NOT EXISTS reviews (
//     id SERIAL PRIMARY KEY,
//     userName TEXT,
//     playName TEXT,
//     playScore INT
//   );

//   CREATE TABLE IF NOT EXISTS genres (
//     id SERIAL PRIMARY KEY,
//     name TEXT
//   );

//   CREATE TABLE IF NOT EXISTS genre_junction (
//     review_id INT REFERENCES reviews(id),
//     genre_id INT REFERENCES genres(id)
//   )

//   Populate Tables:
//   INSERT INTO reviews (userName, playName, playScore) values
// ('The Seventh Wife', 'Six', 3),
// ('PreCrime Lover', 'Minority Report', 5),
// ('Heartbroken Manga Fan', 'Your Lie in April Musical in Concert', 4),
// ('I Hate Kites', 'The Kite Runner', 1),
// ('The Classics', 'THe King and I', 2);

// INSERT INTO genres (name) VALUES
// ('musical'),
// ('play'),
// ('sci-fi'),
// ('comedy'),
// ('historical fiction'),
// ('romance'),
// ('coming of age');

// Select:
// SELECT
// reviews.username,
// reviews.playname,
// reviews.playscore,
// genres.name AS genre
// FROM reviews
// JOIN genre_junction ON reviews.id = genre_junction.review_id
// JOIN genres ON genre_junction.genre_id = genres.id
