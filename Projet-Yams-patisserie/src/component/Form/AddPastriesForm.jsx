import React, { useState } from "react";
import { useAddPastryMutation } from "../../slices/crudApiSlice";

const AddPastriesForm = () => {
  // Utilisez le hook pour ajouter une nouvelle pâtisserie
  const [addPastry, { isLoading, error }] = useAddPastryMutation();

  // États locaux pour stocker les valeurs du formulaire
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Utilisez la mutation pour ajouter une nouvelle pâtisserie
      const result = await addPastry({ name, quantity, image });

      
      console.log("Add pastry successful:", result);

      // Réinitialisez les champs du formulaire après l'ajout réussi
      setName("");
      setQuantity("");
      setImage("");
      
    } catch (error) {
      console.error("Error adding pastry:", error);
    }
  };

  return (

    <>
    <h1>Ajout de patisserie</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantité:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image (URL):</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
     
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Ajout en cours..." : "Ajouter Pâtisserie"}
      </button>
      {error && <div>Erreur lors de l'ajout de la pâtisserie.</div>}
    </form>
    </>
  );
};

export default AddPastriesForm;
