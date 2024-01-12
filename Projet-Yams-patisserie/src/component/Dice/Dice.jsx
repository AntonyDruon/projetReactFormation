import { useState, useEffect } from "react";

const Dice = () => {
  const [diceValues, setDiceValues] = useState([1, 2, 3, 4, 5]);
  const [rollsRemaining, setRollsRemaining] = useState(3);
  const [gameMessage, setGameMessage] = useState("");
  const [lockedDice, setLockedDice] = useState([]);
  const [isAttemptedToday, setIsAttemptedToday] = useState(false);
  useEffect(() => {
    // Vérifiez si le joueur a déjà tenté sa chance aujourd'hui
    const lastAttemptDate = localStorage.getItem("lastAttemptDate");
    const today = new Date().toDateString();

    console.log("lastAttemptDate",lastAttemptDate)
    console.log("today",today)

    if (lastAttemptDate === today) {
      setIsAttemptedToday(true); // changer pour le calendrier de l'avant
    } else {
      setIsAttemptedToday(false);
    }
  }, []);
  const rollDice = () => {
   // vérification du nombre de lancer
   if (!isAttemptedToday && rollsRemaining > 0) {
    const newDiceValues = diceValues.map((value, index) =>
      lockedDice.includes(index) ? value : Math.floor(Math.random() * 6) + 1
    );
    setDiceValues(newDiceValues);
    // à chaque clique pour lancer les dés, on décrémente le nombre de lancés restant
    setRollsRemaining(rollsRemaining - 1);

    if (rollsRemaining === 1) {
      // Si c'est le dernier lancer, mettez à jour isAttemptedToday
      setIsAttemptedToday(true);
      // Enregistrez la date de la tentative dans localStorage
      localStorage.setItem("lastAttemptDate", new Date().toDateString());
    }

    // on utilise la méthode reduce pour compter le nombre d'occurrences de chaque valeur de dé et stocke le résultat dans countMap
    const countMap = newDiceValues.reduce((map, value) => {
      // Assurez-vous que value est une chaîne de caractères (String)
      const key = String(value);

      // Utilisez key au lieu de value pour créer des propriétés dans l'objet map
      map[key] = (map[key] || 0) + 1;
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
  } else if (isAttemptedToday) {
    setGameMessage("Vous avez déjà tenté votre chance aujourd'hui!");
  } else {
    setGameMessage("Vous n'avez plus d'essais!");
  }
};

const handleToggleLock = (index) => {
  setLockedDice((prevLockedDice) =>
    prevLockedDice.includes(index)
      ? prevLockedDice.filter((lockedIndex) => lockedIndex !== index)
      : [...prevLockedDice, index]
  );
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
            src={`../dice/${value}.jpg`}
            alt={`Dice ${value}`}
            style={{
              width: "50px",
              height: "50px",
              margin: "5px",
              border: lockedDice.includes(index) ? "2px solid green" : "none",
            }}
            onClick={() => handleToggleLock(index)}
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
