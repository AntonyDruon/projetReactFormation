/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  useLoginMutation,
  useCheckAuthenticationQuery,
} from "../../slices/authApiSlice";
import "../../styles/AuthForm.css";

const AuthForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const { refetch: checkAuthentication } = useCheckAuthenticationQuery();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await login({email, password});
      console.log("Auth successful:", result);

      // Mettre à jour l'état d'authentification après une connexion réussie
      
      onLoginSuccess();
      checkAuthentication();
      // Appeler la vérification de l'authentification après la connexion réussie
      
    } catch (error) {
      console.error("Auth failed:", error);
    }

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

export default AuthForm;
