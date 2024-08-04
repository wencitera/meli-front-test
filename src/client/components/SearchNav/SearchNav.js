import React, { useState } from "react";
import "./SearchNav.scss";
import { useNavigate } from "react-router-dom";

const SearchNav = (props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (value.trim() == "") {
      setError(true);
    } else {
      navigate(`/items?search=${value}`);
    }
  };

  return (
    <header>
      <form>
        <a href="/">
          <img src={null} alt="MeLi" className="logo" />
        </a>
        <input
          className="SearchBox"
          type="search"
          placeholder="Nunca dejes de buscar"
          onChange={(e) => handleChange(e)}
          aria-label="Nunca dejes de buscar"
        />
        <button
          type="submit"
          onClick={(e) => handleSubmit()}
        >
          <img src={null} alt="Buscar" />
        </button>
      </form>
      
      {/* agregar mensaje de error ? */}
    
    </header>
  );
};

export default SearchNav;