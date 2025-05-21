import {useNavigate} from "react-router-dom";

const Header = ({ user, setUser }) => {}

const handeLogout = (e) => {
  fetch('https://course-project-codesquad-comics-server.onrender.com/logout', {
    method: 'POST',
    headers: 

    .then((response) => {
      if (!response.ok) {
        throw new Error ('Network response was not ok');
    
    })
    .then()
    setUser({""});
    localStorage.removeItem("user");
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });
};

  ; 
  
  () {
    
  }
  return (
    <header>
      <nav>
        <a href="#">
          <img src="public/images/CodeSquad-Comics-logo.png" />
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
      </nav>
    </header>
  );
};

export default Header;
