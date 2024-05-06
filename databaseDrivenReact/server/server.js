import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
const dbConnectionString = process.env.DATABASE_URL;
const connectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: dbConnectionString });

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.json("You are looking at my root route. How roude.");
});

app.get("/reviews", async (request, response) => {
  const result = await db.query(`

SELECT * FROM genre_junction
JOIN reviews ON genre_junction.review_id = reviews.id
JOIN genres ON genre_junction.genre_id = genres.id
WHERE review_id = 1

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
