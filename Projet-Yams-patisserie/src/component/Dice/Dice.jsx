import { useState } from "react";

const Dice = () => {
  const [diceValues, setDiceValues] = useState([1, 2, 3, 4, 5]);
  const [rollsRemaining, setRollsRemaining] = useState(3);
  const [gameMessage, setGameMessage] = useState("");

  const rollDice = () => {
    // vérification du nombre de lancer
    if (rollsRemaining > 0) {
      // génération de tableau de valeur des dés aléatoire
      const newDiceValues = Array.from(
        { length: 5 },
        () => Math.floor(Math.random() * 6) + 1
      );
      setDiceValues(newDiceValues);
      // a chaque clique pour lancer les dés, on décrémente le nombres de lancés restant
      setRollsRemaining(rollsRemaining - 1);

      //on utilise la méthode reduce pour compter le nombre d'occurrences de chaque valeur de dé et stock le résultat dans countMap
      const countMap = newDiceValues.reduce((map, value) => {
        map[value] = (map[value] || 0) + 1;
        return map;
      }, {});

      if (Object.values(countMap).includes(5)) {
        // Yamz
        setGameMessage("Yamz! Vous gagnez 50 000 euros!");
      } else if (Object.values(countMap).includes(4)) {
        // Carré
        setGameMessage("Carré! Vous gagnez 3 pâtisseries!");
      } else if (Object.values(countMap).includes(3)) {
        // Brelan
        setGameMessage("Brelan! Vous gagnez 2 pâtisseries!");
      } else if (Object.values(countMap).includes(2)) {
        // Paire
        setGameMessage("Paire! Vous gagnez 1 pâtisserie!");
      } else {
        setGameMessage("Perdu");
      }
    } else {
      setGameMessage("Vous n'avez plus d'essais!");
    }
  };

  return (
    <div>
      <p style={{ textAlign: "center", color: "black" }}>
        Vous avez {rollsRemaining} lancés restants.
      </p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {diceValues.map((value, index) => (
          <img
            key={index}
            src={`../src/assets/dice/${value}.jpg`}
            alt={`Dice ${value}`}
            style={{ width: "50px", height: "50px", margin: "5px" }}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={rollDice} style={{ width: "200px", height: "80px" }}>
          Lancer (il vous reste {rollsRemaining} essais restants)
        </button>
        {gameMessage && (
          <p
            style={{
              color:
                gameMessage === "Perdu"
                  ? "black"
                  : gameMessage === "Vous n'avez plus d'essais!"
                  ? "black"
                  : "green",
            }}
          >
            {gameMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Dice;
