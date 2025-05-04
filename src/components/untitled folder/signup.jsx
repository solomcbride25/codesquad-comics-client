function Signup() {
    return (
      <div>Signup</div>
    )
  }

export default Signup;

<main>
  <div className="main_login">
    <h1>LOGIN</h1>
    <form>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" />
      <br />
      <br />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" />
      <br />
      <br />

      <label htmlFor="email">Email address:</label>
      <input type="text" id="email" name="email" />
      <br />
      <br />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <br />
      <br />

      <button className="submit" type="submit">Submit</button>
    </form>
  </div>
</main>