// import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ user, setUser }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    fetch(
      "https://course-project-codesquad-comics-server.onrender.com/login/local",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login failed");
        }
        return response.json();
      })
      .then((result) => {
        console.log("Login successful:", result);
        localStorage.setItem("user", JSON.stringify(result.data.user));
        setUser(result.data.user);
        navigate("/admin");
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  return (
    <main>
      <div className="main_login">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="email">Password:</label>
            <input type="password" id="email" name="password" required />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </main>
  );
}

export default Login;
