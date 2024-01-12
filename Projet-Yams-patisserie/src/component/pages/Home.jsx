import { Link } from "react-router-dom";
import { useGetPastriesQuery } from "../../slices/gameApiSlice";
import PatisserieCard from "../Card/Card";
const home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading } = useGetPastriesQuery();

  return (
    <>
      <div>
        <h1>
          Tentez de remporter une ou plusieurs patisseries avec notre jeu de
          yam&apos;s
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button>
          <Link to="/play">Jouer</Link>
        </button>
      </div>

      <h4 style={{ color: "black", textAlign: "center" }}> Lots restants:</h4>
      {isLoading ? (
        "en chargement"
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", width: "80%" }}>
            {data.map((element) => (
              <PatisserieCard
                key={element.id}
                photo={element.image}
                titre={element.name}
                nombreRestant={element.quantity}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default home;
