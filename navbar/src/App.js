import Navbar from "./Navbar";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App (){
  return(
    <>
    <div>
    <h1>Welcome to the heaven</h1>
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/contact" element={<Contact/>} ></Route>
        </Routes>
    </Router>
    </div>
    </>
  );
}
export default App;