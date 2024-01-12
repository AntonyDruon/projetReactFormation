// UpdateForm.jsx

import React, { useState } from "react";

const UpdateForm = ({ pastry, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    name: pastry.name,
    quantity: pastry.quantity,
    image: pastry.image,
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };
  const handleCancel = () => {
    // Réinitialiser les champs du formulaire
    setFormData({
      name: pastry.name,
      quantity: pastry.quantity,
      image: pastry.image,
      
    });

    // Appeler la fonction d'annulation
    onCancel();
  };

  return (
    <>
    <h1>Modification patisserie : <span style={{fontStyle: "italic", fontWeight: "200", color: "red"}}>{pastry.name}</span></h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantité:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </div>
     
      <div style={{display: "flex", justifyContent: "space-between"}}> 
        <button type="submit">Modifier</button>
      <button type="button" onClick={handleCancel}>
          Annuler
        </button>
        </div>
     
    </form>
    </>
  );
};

export default UpdateForm;
