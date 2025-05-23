import { useNavigate } from "react-router-dom";

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handeLogout = (e) => {
    fetch(
      "https://course-project-codesquad-comics-server.onrender.com/logout",
      {
        method: "POST",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setUser(result.data.user);
        localStorage.removeItem("user");
        navigate("/home");
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  return (
    <header>
      <nav>
        <a href="#">
          <img src="public/images/CodeSquad-Comics-logo.jpg" />
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
