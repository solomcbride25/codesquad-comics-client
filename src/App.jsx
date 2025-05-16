import About from "./components/untitled folder/About";
import Admin from "./components/untitled folder/Admin";
import Create from "./components/untitled folder/Create";
import Home from "./components/untitled folder/Home";
import Login from "./components/untitled folder/Login";
import Signup from "./components/untitled folder/Signup";
import Update from "./components/untitled folder/Update";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
/*import use state*/
import { useEffect, useState } from "react";

function App() {
  /*create new set for user */
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : {};
  });

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
        <Header />
      </div>
    </div>
  );
}

export default App;
