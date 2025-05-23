// import books from "../../data/books";

function Admin() {
  <main>
    <h1>ADMIN PAGE</h1>
    <button className="add_button">ADD NEW COMIC</button>
    <table>
      {/* {books.map()} */}
      <tr>
        <th>COMIC TITLE</th>
        <th>EDIT</th>
        <th>DELETE</th>
      </tr>
      <tr>
        <td className="batman"> Batman: The Dark Knight Returns</td>
        <td>
          <button className="edit_button"> EDIT</button>
        </td>
        <td>
          <button className="delete_button">DELETE</button>
        </td>
      </tr>
      <tr>
        <td className="blackpanther">
          Black Panther: A Nation Under Our Feet Book 1{" "}
        </td>
        <td>
          <button className="edit_button"> EDIT</button>
        </td>
        <td>
          <button className="delete_button">DELETE</button>
        </td>
      </tr>
      <tr>
        <td className="funhome">Fun Home: A Family Tragicomic</td>
        <td>
          <button className="edit_button"> EDIT</button>
        </td>
        <td>
          <button className="delete_button">DELETE</button>
        </td>
      </tr>
      <tr>
        <td className="hunter">Hunter X Hunter Vol. 1</td>
        <td>
          <button className="edit_button"> EDIT</button>
        </td>
        <td>
          <button className="delete_button">DELETE</button>
        </td>
      </tr>
      <tr>
        <td className="lumberjanes">Lumberjanes Vol. 1</td>
        <td>
          <button className="edit_button"> EDIT</button>
        </td>
        <td>
          <button className="delete_button">DELETE</button>
        </td>
      </tr>
      <tr>
        <td className="march">March: Book One</td>
        <td>
          <button className="edit_button"> EDIT</button>
        </td>
        <td>
          <button className="delete_button">DELETE</button>
        </td>
      </tr>
      <tr>
        <td className="onepiece">One Piece, Vol 1: Romance Dawn</td>
        <td>
          <button className="edit_button"> EDIT</button>
        </td>
        <td>
          <button className="delete_button">DELETE</button>
        </td>
      </tr>
      <tr>
        <td className="parable">Parable of the Sower</td>
        <td>
          <button className="edit_button"> EDIT</button>
        </td>
        <td>
          <button className="delete_button"> DELETE</button>
        </td>
      </tr>
      <tr>
        <td className="queer">Queer: A Graphic History</td>
        <td>
          <button className="edit_button"> EDIT</button>
        </td>
        <td>
          <button className="delete_button"> DELETE</button>
        </td>
      </tr>
      <tr>
        <td className="twd">The Walking Dead, Vol. 1: Days Gone Bye</td>
        <td>
          <button className="edit_button"> EDIT</button>
        </td>
        <td>
          <button className="delete_button"> DELETE</button>
        </td>
      </tr>
      <tr>
        <td className="wake">
          Wake: The Hidden History of Women-Led Slave Revolts
        </td>
        <td>
          <button className="edit_button"> EDIT</button>
        </td>
        <td>
          <button className="delete_button"> DELETE</button>
        </td>
      </tr>
      <tr>
        <td className="watchmen">Watchmen</td>
        <td>
          <button className="edit_button"> EDIT</button>
        </td>
        <td>
          <button className="delete_button"> DELETE</button>
        </td>
      </tr>
    </table>
  </main>;
}

export default Admin;
