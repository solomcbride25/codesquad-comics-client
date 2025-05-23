function Footer() {
  return (
    <footer>
      <section>
        <h3>VISIT US</h3>
        <p>
          CodeSquad Comics <br />
          123 Dorchester Avenue <br />
          Boston, MA 02124
        </p>
      </section>
      <section>
        <h3>LINKS</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </section>
      <section>
        <h3>FOLLOW US</h3>
        <ul>
          <li>
            <a href="#" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h3 className="product">A PRODUCT OF</h3>
        <a href="#" target="_blank">
          <img src="public/images/CodeSquad-logo.jpg" />
        </a>
      </section>
    </footer>
  );
}

export default Footer;
