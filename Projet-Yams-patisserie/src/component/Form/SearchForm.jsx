import React, { useState } from "react";


const SearchForm = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleChange = (e) => {
      const value = e.target.value;
      setSearchTerm(value);
  
      if (value.length >= 3 || value.length === 0) {
        // Call the onSearch callback
        onSearch(value);
      }
    };

  return (
    
    <form style={{width: "100%", backgroundColor: "#D9D9D9", maxWidth: "800px", padding: "10px"}}>
       <div style={{display: "flex", gap: "15px", alignItems: "center", margin: "0px"}}>
      <label style={{width: "13%"}} htmlFor="searchInput">Rechercher :</label>
      <input
        type="text"
        id="searchInput"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Entrer au moins 3 caractères"
        style={{width: "87%"}}
      />
    </div>
    </form>
    
  );
};

export default SearchForm;