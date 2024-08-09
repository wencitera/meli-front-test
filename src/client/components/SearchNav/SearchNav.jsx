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
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <img src={null} alt="Logo" className="logo" />
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          className="search-input"
          onChange={handleChange}
          />
            <button className="search-button">
                  <img src={null} alt="SearchIcon"/>
            </button>
      </form>
    </div>
  );
};

export default SearchNav;