import logo from './logo.svg';
import './App.css';
import './index.css';

import Logo from './components/Logo';
import BarraPesquisa from './components/SearchBar';
import Slider from './components/Slide';
import { SliderData } from './components/SliderData';
import Menu from './components/Menu';


// - React Router 
import { Routes, BrowserRouter, Router, Route } from "react-router-dom";
// - Pages

import About from './pages/About';
import Home from './pages/Home';
//- componentes
import Navbar from './components/Navbar';


function App() {
  return (
    <body>

      <BrowserRouter>
 
     
      
    
    


      
   

    <Routes>
    <Route path="/"   element={<Home />} />
    <Route path="/about"   element={<About />} />
    </Routes> 


    </BrowserRouter>



    </body>
  );
}

export default App;
