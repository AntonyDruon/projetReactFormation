import styled from "styled-components";

export const StyledTable = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin: 10px; /* Espacement autour du tableau */
  
`;

export const StyledTh = styled.th`
  height: 50px;
  border-bottom: 1px solid black; /* Espacement à l'intérieur des cellules */
  text-align: center; /* Centrage du texte */
  border-right: 1px solid black;
  background-color: orange;
  border-top: 1px solid black;
`;
export const StyledThh = styled.th`
  height: 50px;
  border-bottom: 1px solid black; /* Espacement à l'intérieur des cellules */
  text-align: center; /* Centrage du texte */
  border-right: 1px solid black;
  border-left: 1px solid black;
  background-color: orange;
  border-top: 1px solid black;
`;

export const StyledTd = styled.td`
border-bottom: 1px solid black;
border-right: 1px solid black;
border-left: 1px solid black;
  height: 50px; /* Espacement à l'intérieur des cellules */
  text-align: center; /* Centrage du texte */
`;

export const ThumbnailImage = styled.img`
  width: 50px; /* Ajustez la largeur selon vos besoins */
  height: 50px; /* Ajustez la hauteur selon vos besoins */
`;
export const Button = styled.button`
padding: 5px 10px;
margin-right: 5px;
cursor: pointer;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin: 0;
  gap: 4px;
  border-bottom: 1px solid black;
border-right: 1px solid black;
`;