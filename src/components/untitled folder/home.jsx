// import books from "../../data/books";

function Home() {
  return (
    <main>
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

      <div className="comics" />
      <h1>COMPLETE COMIC COLLECTION</h1>
      <div className="funhome">
        <section>
          <a href="#">
            <img src="public/images/fun-home.jpg" />
          </a>
          <p>
            Fun Home: A Family Tragicomic <br /> by Alison Bechdel <br /> 5
            stars <br />
            <a href="#">Details</a>
          </p>
        </section>
      </div>

      {/* {books.map(
        <div className="watchmen">
          <section>
            <a href="#">
              <img src="public/images/watchmen.jpg" />
            </a>
            <p>
              Watchmen <br /> by Alan Moore <br /> 5 stars <br />
              <a href="#">Details</a>
            </p>
          </section>
        </div>
      )} */}

      <div className="hunterhunter">
        <section>
          <a href="#">
            <img src="public/images/hunter-x-hunter.jpg" />
          </a>
          <p>
            Hunter X Hunter Vol. 1 <br /> by Yoshihiro Togashi <br /> 5 stars{" "}
            <br />
            <a href="#">Details</a>
          </p>
        </section>
      </div>

      <div className="lumberjanes">
        <section>
          <a href="#">
            <img src="public/images/lumberjanes.jpg" />
          </a>
          <p>
            Lumberjanes Vol. 1 <br /> by Noelle Stevenson <br /> 4 stars <br />
            <a href="#">Details</a>
          </p>
        </section>
      </div>

      <div className="onepiece">
        <section>
          <a href="#">
            <img src="public/images/one-piece.jpg" />
          </a>
          <p>
            One Piece, Vol. 1: Romance Dawn <br /> by Eiichiro Oda <br /> 5
            stars <br />
            <a href="#">Details</a>
          </p>
        </section>
      </div>

      <div className="wake">
        <section>
          <a href="#">
            <img src="public/images/wake.jpg" />
          </a>
          <p>
            Wake: The Hidden History of Women-Led Slave Revolts <br /> by
            Rebecca Hall <br /> 4 stars <br />
            <a href="#">Details</a>
          </p>
        </section>
      </div>

      <div className="blackpanther">
        <section>
          <a href="#">
            <img src="public/images/black-panther.jpg" />
          </a>
          <p>
            Black Panther: A Nation Under Our Feet Book 1 <br /> by Ta-Nehisi
            Coates <br /> 3 stars <br />
            <a href="#">Details</a>
          </p>
        </section>
      </div>

      <div className="thewalkingdead">
        <section>
          <a href="#">
            <img src="public/images/the-walking-dead.jpg" />
          </a>
          <p>
            The Walking Dead, Vol. 1: Days Gone Bye <br /> by Robert Kirkman{" "}
            <br /> 4 stars <br />
            <a href="#">Details</a>
          </p>
        </section>
      </div>

      <div className="march">
        <section>
          <a href="#">
            <img src="public/images/march.jpg" />
          </a>
          <p>
            March: Book One <br /> by John Lewis <br /> 5 stars <br />
            <a href="#">Details</a>
          </p>
        </section>
      </div>

      <div className="batman">
        <section>
          <a href="#">
            <img src="public/images/batman.jpg" />
          </a>
          <p>
            Batman: The Dark Knight Returns <br /> by Frank Miller <br /> 3
            stars <br />
            <a href="#">Details</a>
          </p>
        </section>
      </div>

      <div className="queer">
        <section>
          <a href="#">
            <img src="public/images/queer.jpg" />
          </a>
          <p>
            Queer: A Graphic History <br /> by Meg-John Baker <br /> 4 stars{" "}
            <br />
            <a href="#">Details</a>
          </p>
        </section>
      </div>

      <div className="parable">
        <section>
          <a href="#">
            <img src="public/images/parable-of-the-sower.jpg" />
          </a>
          <p>
            Parable of the Sower <br /> by Octavia E. Butler <br /> 4 stars{" "}
            <br />
            <a href="#">Details</a>
          </p>
        </section>
      </div>
    </main>
  );
}

export default Home;
