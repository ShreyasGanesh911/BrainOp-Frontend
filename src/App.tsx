import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./global/Navbar";
import Footer from "./global/Footer";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
       
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Dashboard/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>

      </Routes>
      <Footer/>
      
    </BrowserRouter>
    </>
  );
}

export default App;
