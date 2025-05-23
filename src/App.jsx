import About from "./components/about";
import Admin from "./components/admin";
import Create from "./components/create";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Update from "./components/update";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
/*import use state*/
import { useEffect, useState } from "react";

function App() {
  /*create new set for user */
  const [user, setUser] = useState(localStorage.getItem("user") || {});

  useEffect(() => {
    if (user && Object.keys(user).length) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <div className="App">
      <div>
        <Header user={user} setUser={setUser} />
        <About />
        <Admin />
        <Create />
        <Home />
        <Login user={user} setUser={setUser} />
        <Signup user={user} setUser={setUser} />
        <Update />
        <Footer />
      </div>
    </div>
  );
}

export default App;
