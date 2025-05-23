import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const handleCreate = (e) => {
    e.preventDefault();
    console.log("Create form submitted!");

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
      "https://course-project-codesquad-comics-server.onrender.com/api/books/create",
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit the book");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Book submitted successfully:", data);
        navigate("/admin");
      })
      .catch((error) => {
        console.error("Submission error:", error);
      });
  };

  return (
    <div>
      <h2>Create a New Book </h2>
      <form onSubmit={handleCreate}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" required />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <input type="text" id="genre" name="genre" required />
        </div>
        <div>
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
        </div>
        <div>
          <label htmlFor="pages">Number of pages:</label>
          <input type="number" id="pages" name="pages" />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input type="number" id="rating" name="rating" />
        </div>
        <label htmlFor="synopsis">Synopsis:</label>
        <textarea id="synopsis" name="synopsis" defaultValue="Synopsis" />
        <br />
        <button type="button">Submit</button>
      </form>
    </div>
  );
};

export default Create;
