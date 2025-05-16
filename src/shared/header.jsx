function Header() {
  return (
    <div>Header</div>
  )
}

<header>
<a href="#">
          <img src="public/images/CodeSquad-Comics-logo.png"/>
        </a>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">LOGIN</a>
          </li>
        </ul>
</header>

export default Header 

const Header = ({user, setUser}) => {
  return (
    <nav>
      <h1>My App</h1>
      {/* Add nav links, user info, logout button, etc. */}
    </nav>
  )
};