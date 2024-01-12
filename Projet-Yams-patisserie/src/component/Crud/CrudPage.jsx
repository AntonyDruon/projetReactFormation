// CrudPage.jsx

import React, { useEffect, useState } from "react";
import { useGetPastriesQuery, useDeletePastryMutation, useUpdatePastryMutation } from "../../slices/crudApiSlice";
import { StyledTable, StyledTd, StyledTh , ThumbnailImage, Button, StyledButtonContainer, StyledThh} from "./styled";
import UpdateForm from "../Form/UpdateForm";
import SearchForm from "../Form/SearchForm";

const CrudPage = () => {

  
  const { data: pastries, error, refetch } = useGetPastriesQuery();
  const [deletePastry] = useDeletePastryMutation();
  const [updatePastry] = useUpdatePastryMutation();
  const [searchTerm, setSearchTerm] = useState("");
  const [tableData, setTableData] = useState([]);
  const [selectedPastry, setSelectedPastry] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (pastries) {
      const updatedTableData = pastries
        .filter((pastry) =>
          pastry.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((pastry) => ({
          image: pastry.image,
          name: pastry.name,
          quantity: pastry.quantity,
          id: pastry.id,
        }));
  
      setTableData(updatedTableData);
    }
  }, [pastries, searchTerm]);

  const handleDelete = async (id) => {
    try {
      await deletePastry(id);
      refetch();
    } catch (error) {
      console.error("Error deleting pastry:", error);
    }
  };

  const handleUpdate = async (id, newData) => {
    try {
      await updatePastry({ id, ...newData });
      refetch();
      setIsEditing(false);
      setSelectedPastry(null); 
    } catch (error) {
      console.error("Error updating pastry:", error);
    }
  };

  const handleEditClick = (pastry) => {
    setSelectedPastry(pastry);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setSelectedPastry(null);
  };

  if (error) {
    return <div>Erreur lors du chargement des données.</div>;
  }

  return (
    <div style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column"}}>
     <SearchForm onSearch={(term) => setSearchTerm(term)} />
    <StyledTable>
      <thead>
        <tr>
          <StyledThh>Image</StyledThh>
          <StyledTh>Nom</StyledTh>
          <StyledTh>Quantité restante</StyledTh>
          <StyledTh>Actions</StyledTh>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <StyledTd>
              <ThumbnailImage src={row.image} alt={row.name} />
            </StyledTd>
            <StyledTd>{row.name}</StyledTd>
            <StyledTd>{row.quantity}</StyledTd>
            <StyledButtonContainer>
              <Button onClick={() => handleDelete(row.id)}>Supprimer</Button>
              
                <Button onClick={() => handleEditClick(row)}>Modifier</Button>
            
            </StyledButtonContainer>
          </tr>
        ))}
      </tbody>
    </StyledTable>
    {selectedPastry && (
      <div style={{width: "400px"}}> 
      <UpdateForm pastry={selectedPastry} onCancel={handleCancelEdit} onUpdate={(newData)  => handleUpdate(selectedPastry.id, newData)} />
      </div>
    )}
    </div>
  );
};

export default CrudPage;
