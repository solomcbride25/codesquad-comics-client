import React, { useEffect, useState } from "react";
import { booksData } from "../../data/books";

export default Update;

const Update = () => {
  const id = 2;
  const [book, setBook] = useState({});

  useEffect(() => {
    const foundBook = booksData.find((b) => b.id === id);
    setBook(foundBook || {});
  }, []);

  return (
    <main>
      <div className="main_update">
        <h1>UPDATE COMIC</h1>

        <form>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={book.title} />
          <br />
          <br />

          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" value={book.title} />
          <br />
          <br />

          <label htmlFor="publisher">Publisher:</label>
          <select id="publisher" name="publisher" defaultValue="Select">
            <option value="BOOM Box!">BOOM Box!</option>
            <option value="DC Comics">DC Comics</option>
            <option value="Harry N. Abrams">Harry N. Abrams</option>
            <option value="Icon Books">Icon Books</option>
            <option value="Image Comics">Image Comics</option>
            <option value="Marvel">Marvel</option>
            <option value="Simon & Schuster">Simon & Schuster</option>
            <option value="Top Shelf Productions">Top Shelf Productions</option>
            <option value="VIZ Media LLC">VIZ Media LLC</option>
            <option value="Select">Select</option>
          </select>
          <div>
          <label htmlFor="genre">Genre:</label>
          <input type="text" id="genre" name="genre" />
          </div>
          <div>
          <label htmlFor="pages">Number of pages:</label>
          <input type="number" id="pages" name="pages" />
          </div>
          <div>
          <label htmlFor="rating">Rating:</label>
          <input type="number" id="rating" name="rating" />
          </div>
          <div>
          <label htmlFor="synopsis">Synopsis:</label>
          <textarea id="synopsis" name="synopsis">
            Synopsis value stored in database
          </textarea>
          </div>
          <button type="button">Submit</button>
        </form>
      </div>
    </main>
  );
};
