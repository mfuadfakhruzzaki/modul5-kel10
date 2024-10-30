import React from "react";
import { useParams } from "react-router-dom";
import books from "../data/BooksData"; // Import the shared book data

export default function BookDetail() {
  const { id } = useParams(); // Get the book id from the URL
  const book = books.find((book) => book.id === parseInt(id, 10)); // Find the book by id

  if (!book) {
    return (
      <div>
        <h2>Book Not Found</h2>
        <p>The book you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="book-detail">
      <h1>{book.title}</h1>
      <img src={book.img} alt={book.title} className="book-img" />
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Year: {book.year}</p>
      <p>Description: {book.description}</p>
    </div>
  );
}
