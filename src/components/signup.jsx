const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup form submitted!");
  
    console.log("First Name:", e.target.firstName.value);
    console.log("Last Name:", e.target.lastName.value);
    console.log("Username:", e.target.username.value);
    console.log("Password:", e.target.password.value);
  }
    return ( 
      <main>
      <div className="main_login">
        <h1>SIGNUP</h1>
        <form onSubmit={handleSignup}>
          <div>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" id="firstName" name="firstName" />
          </div>
           <div>
            <label htmlFor="lastName">First Name: </label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          <div>
            <label htmlFor="email">Email Address: </label>;
            <input type="text" id="email" name="email" />;
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
        </form>
      </div>
    </main>
    )
  }

export default Signup;