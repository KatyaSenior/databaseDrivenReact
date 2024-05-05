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
    TheatreDB.id,
    TheatreDB.userName,
    TheatreDB.playName,
    TheatreDB.playScore,
    TheatreDB.review,
    Array_AGG(genres.item) AS genres
    FROM TheatreDB
    JOIN genres_junction ON TheatreDB.id = genres_junction.user_id
    JOIN genres ON genres_junction.genre_id = genres.id
    GROUP BY TheatreDB.id, TheatreDB.userName,
    TheatreDB.playName,
    TheatreDB.playScore,
    TheatreDB.review,
    `);
  response.json(result.rows);
});

app.post("/user", async (request, response) => {
  const userName = request.body.userName;
  const playName = request.body.playName;
  const playScore = request.body.playScore;
  const review = request.body.review;

  db.query(
    `INSERT INTO TheatreDB (userName, playName, playScore, review, genres) values (
        'Value One', 'Value Two', 'Value Three', 'Value Four', 'Value Five')`
  );
  response.json({ success: true });
});

db.query(
  `CREATE TABLE IF NOT EXISTS TheatreDB(
        id SERIAL PRIMARY KEY,
        userName TEXT,
        playName TEXT,
        playScore FLOAT,
        review  TEXT,
        genres TEXT,
        url
    )`
);

app.listen(8080, () => console.log("I am running on 8080"));
