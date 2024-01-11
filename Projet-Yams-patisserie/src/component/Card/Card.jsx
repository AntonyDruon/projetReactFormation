/* eslint-disable react/prop-types */
const PatisserieCard = ({ photo, titre, nombreRestant }) => {
  return (
    <div style={styles.card}>
      <img src={photo} alt={titre} style={styles.image} />
      <div style={styles.info}>
        <h4>
          {titre} : {nombreRestant}
        </h4>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    width: "300px",
    margin: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    color: "black",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  info: {
    padding: "16px",
  },
};

export default PatisserieCard;
