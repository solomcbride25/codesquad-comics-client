import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Admin() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      fetch(
        "https://course-project-codesquad-comics-server.onrender.com/api/books"
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => setBooks(data))
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    };
    fetchBooks();
  }, []);

  //handler function
  const handleDelete = (bookId) => {
    fetch(
      `https://course-project-codesquad-comics-server.onrender.com/api/books/delete/${bookId}`,
      {
        method: "delete",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete book");
        }
        console.log("Book deleted successfully");
      })
      .catch((error) => {
        console.error("Delete error:", error);
      });
  };

  return (
    <main>
      <h1>ADMIN PAGE</h1>
      <button className="add_button">ADD NEW COMIC</button>
      <table>
        <thead>
          <tr>
            <th>COMIC TITLE</th>
            <th>EDIT</th>
            <button onClick={handleDelete}>DELETE</button>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>
                <button className="edit_button">EDIT</button>
              </td>
              <td>
                <button className="delete_button">DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
export default Admin;
