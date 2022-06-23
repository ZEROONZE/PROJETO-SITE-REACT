const BarraPesquisa = () => {
    return (
      <div className="search-box">
          <input type="text" placeholder="Busque aqui..." className="search-input" />
          <a href="#" className="search-btn">
              <i className="fas fa-search"></i>
          </a>
      </div>
    );
  };
  
  export default BarraPesquisa;