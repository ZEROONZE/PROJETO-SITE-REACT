import React, {useState} from 'react'
import {Link} from "react-router-dom";
import '../Mobile.scss';


const Navbar = () => {
    const [active, setMode] = useState(false);
    const toggleMode = ( ) => {
        setMode(!active);
       
    }



  return (
    
<div className="topo">
<div className="">
   <div className={active ? "menu menuOpen" : "menu menuClose"}>
    <div className='list'>
       <ul className='listItems' >
             <li><Link to="/" className='home'>Home</Link></li>
             <li><Link to="/About" className='home'>sobre</Link></li>
                
                <li><Link to="/">Cadastro</Link>
                  <ul to="/" className='submenu'>
                    <li id="quadrado"></li>

                       
                    <br></br>
                    <p></p>
                       <li><Link to="/About">Internet</Link></li>
                        <li><Link to="/About">Claro APP</Link></li>
                         <li><Link to="/About">Claro TV HD</Link></li>
                          <li><Link to="/About">Virtua + Claro TV 4k</Link></li>
                            <li><Link to="/About">Móvel controle</Link></li>
                                 <li><Link to="/About">4play</Link></li>  
                  </ul>
              </li> 


            <li><Link to="/">Planos</Link>
               <ul className='submenu'>
                 <li id="quadrado2"></li>

                    <li><Link to="/About">Claro APP</Link></li>
                    <li> <Link to="/About">Claro TV HD</Link></li>
                    <li>   <Link to="/About">Claro TV 4k</Link></li>
                    <li>    <Link to="/About">Claro BOX</Link></li>
              </ul>
          </li>


            <li><Link to="/">Atividade</Link></li>
      </ul>
      </div>
  </div>
</div>
          
  




        <div  className='menumobi'>
        <div className={active ? "icon iconActive" : "icon"} onClick={toggleMode}>
            <div className='hamburguer hamburguerIcon'></div>

            </div>
        
      </div>

      </div>

    );
};



export default Navbar;