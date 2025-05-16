import React from "react";

const Create = () => {
  const handleCreate = (e) => {
    e.preventDefault();
    console.log("Create form submitted!");

    console.log("Title:", e.target.title.value);
    console.log("Author:", e.target.author.value);
    console.log("Genre:", e.target.genre.value);
    console.log("Year", e.target.year.value);
  };

  return (
    <div>
      <h2>Create a New Book </h2>
      <form onSubmit={handleCreate}>
        <div>
          <label>Title:</label>
          <input type="text" id="title" required />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" id="author" required />
        </div>
        <div>
          <label>Genre:</label>
          <input type="text" id="genre" required />
        </div>
        <div>
          <label htmlFor="publisher">Publisher:</label>
          <select id="publisher" defaultValue="Select">
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
        <textarea id="synopsis" name="synopsis">
          Synopsis
        </textarea>
        <br />
        <button type="button">Submit</button>
      </form>
    </div>
  );
};

export default Create;
