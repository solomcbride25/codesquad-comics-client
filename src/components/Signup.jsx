import React from "react";
import { useNavigate } from "react-router-dom";



const Signup = () => {
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup form submitted!");
  
    console.log("First Name:", e.target.firstName.value);
    console.log("Last Name:", e.target.lastName.value);
    console.log("Username:", e.target.username.value);
    console.log("Password:", e.target.password.value);

    fetch('https://course-project-codesquad-comics-server.onrender.com/signup/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Login failed');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Login successful:', data);
        localStorage.setItem('user', JSON.stringify(data));
        setUser(data);
        navigate('/admin');
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  };
  }
    return ( 
      <main>
      <div className="main_login">
        <h1>LOGIN</h1>
        <form onSubmit={handleSignup}>
          <div>
            <label>First Name: </label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div>
            <label>Email Address: </label>;
            <input type="text" id="email" name="email" />;
          </div>
          <div>
            <label>Password:</label>
            <input type="password" id="password" name="password" />
          </div>
        </form>
      </div>
    </main>
    )
  }

export default Signup;