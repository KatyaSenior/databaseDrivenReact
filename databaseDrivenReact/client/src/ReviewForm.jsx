import { useState } from "react";

export default function ReviewForm() {
  const [form, setForm] = useState({
    username: "",
    playName: "",
    playScore: 5,
    playReview: "",
    genres: "",
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