import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./shared/Header";
import Home from "./components/Home";
import About from "./components/About";
import Admin from "./components/Admin";
import Create from "./components/Create";
import Signup from "./components/Signup";
import Update from "./components/Update";
import Footer from "./shared/footer";
import Login from "./components/login";

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

  //test route error
  return (
    <div className="App">
      <div>
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login user={user} setUser={setUser}  />} />
          <Route path="/signup" element={<Signup user={user} setUser={setUser}  />} />
          <Route path="/update/:bookId" element={<Update />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
