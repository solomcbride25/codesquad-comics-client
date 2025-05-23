import { useEffect, useState } from "react";
import booksData from "../data/books";

function Admin() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

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
