import logo from './logo.svg';
import './App.css';
import './index.css';
import Menu from './components/Menu';
import Logo from './components/Logo';
import BarraPesquisa from './components/SearchBar';
import Slider from './components/Slide';
import { SliderData } from './components/SliderData';




function App() {
  return (
    <body>
      <Logo />
      <BarraPesquisa />
    <Menu />
    <Slider slides={SliderData}/>;
    
    
           </body>
  );
}

export default App;
