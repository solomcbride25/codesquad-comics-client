// import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login({ user, setUser }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    fetch('https://course-project-codesquad-comics-server.onrender.com/login/local', {
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

const Login = () => {
  const handleLogin = (e) => {
    console.log("Login form submitted!");
    console.log("Email:", e.target.email.value);
    console.log("Password:", e.target.password.value);
  }};
  
  return (
  <main>
    <form onSubmit={handleLogin}>
      <div>
        <label>Email:</label>
        <input type="email" name="email" required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" required />
      </div>
      <button type="submit">Log In</button>
    </form>
  </main>
  );
}

export default Login