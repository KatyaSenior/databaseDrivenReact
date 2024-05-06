import { useState } from "react";

export default function ReviewForm() {
  const [form, setForm] = useState({
    username: "",
    playName: "",
    playScore: 5,
    genre: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:8080/contestant", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Review</h3>
      <label htmlFor="userName">Username</label>
      <input
        type="text"
        name="userName"
        placeholder="Your Username"
        required
        onChange={handleChange}
      />
      <label htmlFor="playName">Name of Performance</label>
      <input
        type="text"
        name="playName"
        placeholder="Name of Play/Musical"
        required
        onChange={handleChange}
      />
      <label htmlFor="playScore">Score Out of 5</label>
      <input
        type="number"
        name="playScore"
        placeholder="0"
        required
        onChange={handleChange}
      />
      <label htmlFor="genre">Main Genre</label>
      <input
        type="text"
        name="genre"
        placeholder="play"
        required
        onChange={handleChange}
      />
      <button>Submit Review</button>
    </form>
  );
}
