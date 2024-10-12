import './App.css';
import Home from './pages/Home.js';
import Footer from './components/Layout/Footer.js'
import NotFound from './pages/NotFound.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Footer" element={<Footer/>}></Route>
      <Route path="*" element={<NotFound />} />


    </Routes>
    </BrowserRouter>
    
    </div>
    </>
  );
}

export default App;
