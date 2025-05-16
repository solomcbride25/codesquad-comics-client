// import { useState } from "react";

const Login = () => {
  const handleLogin = (e) => {
    console.log("Login form submitted!");
    console.log("Email:", e.target.email.value);
    console.log("Password:", e.target.password.value);
  };
  
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