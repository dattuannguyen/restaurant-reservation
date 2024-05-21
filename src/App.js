import './App.css';
import {Routes,Route} from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Reservation from "./Component/Reservation/Reservation";
import Home from "./Component/Home/Home";
import Contact from "./Component/Contact/Contact";

function App() {
  return (
      <>
              <Navbar/>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/reservation" element={<Reservation/>}/>
                  <Route path="/contact" element={<Contact />} />
              </Routes>
      </>
  );
}

export default App;
