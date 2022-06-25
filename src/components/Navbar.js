import React from 'react'
import {Link} from "react-router-dom";



const Navbar = () => {
  return (
    

<div className="topo">
   <div className=''>
       <ul className='menu' >
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
          
    );
  };







export default Navbar;