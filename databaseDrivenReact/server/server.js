import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

import { db } from "./databaseCall.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(expres.json());

const connectionString = process.env.DATABASE_URL;

const db = new pg.Pool({ connectionString: connectionString });

app.get("/", (request, response) => {
  response.json("You are looking at my root route. How roude.");
});

app.get("/reviews", async (request, response) => {
  const result = await db.quert(`SELECT
    reviews.id,
    reviews.userName,
    reviews.playName,
    reviews.playScore,
    Array_AGG(genres.item) AS genres
    FROM reviews
    JOIN genres_junction ON reviews.id = genres_junction.user_id
    JOIN genres ON genres_junction.genre_id = genres.id
    GROUP BY reviews.id, reviews.userName,
    reviews.playName,
    reviews.playScore,
    `);
  response.json(result.rows);
});

app.post("/review", async (request, response) => {
  const userName = request.body.userName;
  const playName = request.body.playName;
  const playScore = request.body.playScore;

  db.query(
    `INSERT INTO TheatreDB (userName, playName, playScore,) values (
        'Value One', 'Value Two', 'Value Three', 'Value Four', )`
  );
  response.json({ success: true });
});

app.listen(8080, () => console.log("I am running on 8080"));
