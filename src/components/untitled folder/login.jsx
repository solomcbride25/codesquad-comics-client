function Login() {
    return (
      <div>Login</div>
    )
  }

export default Login;

<main>
  <div className="main_login">
    <h1>LOGIN</h1>
    <form>
      <label htmlFor="email">Email address:</label>
      <input type="text" id="email" name="email" defaultValue="" />
      <br />
      <br />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" defaultValue="" />
      <br />
      <br />

      <button className="submit">Submit</button>
    </form>
  </div>
</main>