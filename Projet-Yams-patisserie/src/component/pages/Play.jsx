import Dice from "../Dice/Dice";

const Play = () => {
  return (
    <>
      <div>
        <h1>Jeu du Yams</h1>
        <p style={{ textAlign: "center", color: "black" }}>
          Vous avez 3 lancés.
        </p>
        <p style={{ textAlign: "center", color: "black" }}>
          Si vous obtenez une paire (2 dés identiques), vous gagnez une
          pâtisserie
        </p>
        <p style={{ textAlign: "center", color: "black" }}>
          Si vous obtenez un brelan (3 dés identiques), vous gagnez 2 pâtisserie
        </p>
        <p style={{ textAlign: "center", color: "black" }}>
          Si vous obtenez un carré (4 dés identiques), vous gagnez 3 pâtisserie
        </p>
        <p style={{ textAlign: "center", color: "black" }}>
          Et si vous faites un yams.. (5 dés identiques), vous avez une
          surprise!
        </p>
        <p style={{ textAlign: "center", color: "black" }}>Bonne chance !!</p>
      </div>

      <Dice />
    </>
  );
};
export default Play;
