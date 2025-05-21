function Footer() {
  return (
    <div>Footer</div>
  )
}

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
            <link to="#">Home</link>
          </li>
          <li>
            <link to="#">About</link>
          </li>
          <li>
            <a href="#" onClick={handleLogout}>Logout</link>
          </li>
        </ul>
      </section>
      <section>
        <h3>FOLLOW US</h3>
        <ul>
          <li>
            <a href="#" target="_blank">Facebook</a>
          </li>
          <li>
            <a href="#" target="_blank">Instagram</a>
          </li>
          <li>
            <a href="#" target="_blank">Twitter</a>
          </li>
        </ul>
      </section>
      <section>
        <h3 className="product">A PRODUCT OF</h3>
        <a href="#" target="_blank">
          <img src="public/images/CodeSquad-website-logo.png"/>
        </a>
      </section>
</footer>

export default Footer;