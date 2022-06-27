import App from "../App";
import { SliderData } from "../components/SliderData"
import Slider from '../components/Slide'


import Navbar from "../components/Navbar";



import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';


import { CadastroData } from "../components/CadastroData";
import Cadastro from "../components/Cadastro";
import Nome from "../components/Nome";



const About = () => {
  return (
    <div className="fundo">
        <Navbar /> 
        <Nome />
        <Cadastro cadastros={CadastroData}/>
     
         </div>

  )
}

export default About;