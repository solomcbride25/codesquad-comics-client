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
        .then((result) => setBooks(result.data.books))
        .catch((error) => console.error("Fetch error:", error));
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
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>
                <Link to={`/update/${book._id}`} className="edit_button">EDIT</Link>
              </td>
              <td>
                <button className="delete_button"  onClick={()=>handleDelete(book._id)}>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
export default Admin;
