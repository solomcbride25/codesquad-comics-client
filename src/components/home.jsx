import { useEffect, useState } from "react";
import booksData from "../data/books";

function Home() {
  const [books, setBooks] = useState([]);

  /* useeffect function */
  useEffect(() => {
    setBooks(booksData);
  }, []);

  return (
    <div>
      <div className="main_index">
        <h1>ABOUT CODESQUAD COMICS</h1>
        <p>
          CodeSquad Comics is a collection of graphic novels read by Solomon
          McBride. Copyrighted images are used for review purposes only. Meta
          information about this collection can be found below. A detailed list
          of all the graphic novels in this collection can be found on the
          homepage. Additional details about each comic book including the
          author, genre, number of pages, and a brief synopsis, can be found by
          navigating to the homepage and clicking the image of the book cover or
          the Details link for the desired graphic novel.
        </p>
      </div>
      {books.map((book) => (
        <div className={book.className} key={book._id}>
          <section>
            <a href="#">
              <img src={`/images/${book.imageUrl}`} alt={book.title} />
            </a>
            <p>
              {book.title} <br />
              by {book.author} <br />
              {book.stars} stars <br />
              <a href="#">Details</a>
            </p>
          </section>
        </div>
      ))}
    </div>
  );
}

export default Home;
