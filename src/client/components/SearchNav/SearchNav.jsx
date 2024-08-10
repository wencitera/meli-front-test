import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SearchNav.scss';  
import MeliLogo from '../../assets/Logo_ML.png'
import SearchLogo from '../../assets/ic_Search.png'

const SearchNav = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") 
      navigate(`/items?search=${value}`);
  };


  return (
    <header className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <img src={MeliLogo} alt="Logo de MercadoLibre" className="logo" onClick={() => navigate('/')}/>
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          className="search-input"
          aria-label="Cuadro de busqueda"
          onChange={handleChange}
          />
            <button aria-label="Botón Buscar" className="search-button">
                  <img src={SearchLogo} alt="SearchIcon"/>
            </button>
      </form>
    </header>
  );
};

export default SearchNav;