import { useState } from "react";
import { useLoginMutation } from "../../slices/authApiSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate } = useLoginMutation();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Utilisez la mutation pour envoyer la requête avec les données du formulaire
      const result = await mutate({ email, password });

      // Gérez la réponse de la mutation (par exemple, enregistrer le token d'authentification dans le store)
      console.log("Auth successful:", result.data);
    } catch (error) {
      // Gérez les erreurs d'authentification
      console.error("Auth failed:", error);
    }

    // Réinitialisez les champs du formulaire si nécessaire
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default LoginForm;
