import App from "../App";
import BarraPesquisa from '../components/SearchBar';
import { SliderData } from "../components/SliderData"
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Slider from '../components/Slide'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import Footer from "../components/Footer";

import "../Mobile.scss";

const Home = () => {
  
    return (
      <div> 

      <Logo />
      <BarraPesquisa />
      <Navbar /> 
      <Slider slides={SliderData}/>
      <Footer />
    </div>
  )
}

export default Home;