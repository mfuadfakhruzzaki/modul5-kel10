import { Fragment } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Search.css"; // You'll need to create or copy styles
import books from "../data/BooksData"; // Import the shared book data

export default function Search() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;
  const navigate = useNavigate(); // Declare useNavigate for routing

  // Split books data into two categories
  const featuredBooks = books.filter((book) => book.id <= 3); // First three books
  const allBooks = books.filter((book) => book.id > 3); // Remaining books

  return (
    <>
      <p id="books">Featured Books</p>
      <div className="containerTop">
        {featuredBooks.map((item, index) => (
          <Fragment key={item.id}>
            <CardBig
              title={item.title}
              img={item.img}
              genre={item.genre}
              size={STAR_SIZE}
              color={STAR_COLOR}
              onClick={() => navigate(`/book/${item.id}`)} // Navigate to BookDetail on click
            />
            {featuredBooks.length === index + 1 ? (
              <div style={{ marginRight: 40 }} />
            ) : null}
          </Fragment>
        ))}
      </div>
      <div className="rowcoba">
        <div className="column">
          <p id="books">All Books</p>
          {allBooks.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall
                title={item.title}
                img={item.img}
                genre={item.genre}
                size={STAR_SIZE}
                color={STAR_COLOR}
                onClick={() => navigate(`/book/${item.id}`)} // Navigate to BookDetail on click
              />
              {allBooks.length === index + 1 && (
                <div style={{ marginBottom: 80 }} />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
