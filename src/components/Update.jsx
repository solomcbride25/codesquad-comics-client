import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    fetch(
      `https://course-project-codesquad-comics-server.onrender.com/api/books/${bookId}`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login failed");
        }
        return response.json();
      })
      .then((result) => {
        console.log("Login successful:", result);
        setBook(result.data.book);
        navigate("/admin");
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  }, [bookId, navigate]);

  function handleFormSubmit(e) {
    event.preventDefault(); // Prevents page refresh on form submission

    const body = {
      title: e.target.title.value,
      author: e.target.author.value,
      genre: e.target.genre.value,
      publisher: e.target.publisher.value,
      pages: e.target.pages.value,
      rating: e.target.rating.value,
      synopsis: e.target.synopsis.value,
    };

    fetch(
      `https://course-project-codesquad-comics-server.onrender.com/api/books/edit/${bookId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login failed");
        }
        return response.json();
      })
      .then((result) => {
        console.log("Login successful:", result);
        setBook(result.data.user);
        navigate("/admin");
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  }

  console.log('book :>> ', book);
  return (
    <main>
      <div className="main_update">
        <h1>UPDATE COMIC</h1>

        <form onSubmit={handleFormSubmit}>
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
            <input type="text" id="genre" name="genre" value={book.genre} />
          </div>
          <div>
            <label htmlFor="pages">Number of pages:</label>
            <input type="number" id="pages" name="pages" />
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" name="rating" value={book.rating} />
          </div>
          <div>
            <label htmlFor="synopsis">Synopsis:</label>
            <textarea id="synopsis" name="synopsis" defaultValue={book.synopsis} />
          </div>
          <button type="button">Submit</button>
        </form>
      </div>
    </main>
  );
};
export default Update;
