
/*import use state*/
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Admin from "./components/Admin";
import Create from "./components/Create";
import Signup from "./components/Signup";
import Update from "./components/Update";

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
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/update" element={<Update/>}/>
        </Routes>
       {/* ??\\ <About />
        <Admin />
        <Create />
        <Home />
        <Login user={user} setUser={setUser} />
        <Signup user={user} setUser={setUser} />
        <Update />
        <Footer />
        <Header /> */}
      </div>
    </div>
  );
}

export default App;
