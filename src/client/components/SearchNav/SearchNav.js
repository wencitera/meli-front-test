import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SearchNav.scss';  

const SearchNav = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      setError(true);
    } else {
      navigate(`/items?search=${value}`);
    }
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <a href="/">
          <img src={null} alt="MeLi" className="logo" />
        </a>
        <input
          className="SearchBox"
          type="search"
          placeholder="Nunca dejes de buscar"
          onChange={handleChange}
          aria-label="Nunca dejes de buscar"
        />
        <button type="submit">
          <img src={null} alt="Buscar" />
        </button>
      </form>
      
    </header>
  );
};

export default SearchNav;