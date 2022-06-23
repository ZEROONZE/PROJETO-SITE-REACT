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
                 <li><a>Iphone 6</a></li>
                 <li><a>Iphone 6S</a></li>
                  <li><a>Iphone 7</a></li>
                 <li><a>Iphone 7s</a></li>
                 <li><a>Iphone 8</a></li>
                <li><a>Iphone 8 plus</a></li>
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