
import {Link} from "react-router-dom";

const Menu = () => {
   
    return (
          <div className="topo">
           <div className=''>
          <ul className='menu' >
            <li><a className='home'>Home</a></li>
            <li><a className='home'>sobre</a></li>
            <li><a>Cadastro</a>
                 <ul className='submenu'>
                    <li id="quadrado"></li>
                   
                 <li><a>Internet</a></li>
                 <li><a>Claro APP</a></li>
                  <li><a>Claro TV HD</a></li>
                 <li><a>Virtua + Claro TV 4k</a></li>
                 <li><a>Móvel controle</a></li>
                <li><a>4play</a></li>
                 </ul>
                 </li>
            <li><a>Planos</a>
            <ul className='submenu'>
            <li id="quadrado2"></li>
                <li><a>Iphone 6</a></li>
                 <li><a>Iphone 6S</a></li>
                  <li><a>Iphone 7</a></li>
                  
                  <li><a>Iphone 8</a></li>
          
                 </ul>
                 </li>
           <li><a>Atividade</a></li>
         </ul>
           </div></div>
          
    );
  };
  
  
  export default Menu;