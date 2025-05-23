const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login form submitted!");

    console.log("Email:", e.target.email.value);
    console.log("Password:", e.target.password.value);
  };

  return (
    <main>
      <div className="main_login">
        <h1>LOGIN</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" required />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
