import { useState, useEffect } from "react";
import AuthForm from "../Form/AuthForm";
import CrudPage from "../Crud/CrudPage";
import {
  useCheckAuthenticationQuery,
  useLogoutQuery,
} from "../../slices/authApiSlice";

const Admin = () => {
  const { data: authenticationData, refetch: checkAuthentication } =
    useCheckAuthenticationQuery();
  const { refetch: logout } = useLogoutQuery();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Utilisez la fonction retournée par useCheckAuthenticationQuery pour refetch
        await checkAuthentication();
      } catch (error) {
        // La requête d'authentification a échoué
        setIsAuthenticated(false);
      }
    };

    // Vérifier l'authentification lors du montage du composant
    fetchData();
  }, []);

  useEffect(() => {
    // Mettre à jour l'état d'authentification lorsque les données d'authentification changent
    if (authenticationData) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [authenticationData]);

  const handleLogout = async () => {
    // Appeler la fonction de déconnexion
    await logout();

    // Mettre à jour l'état d'authentification
    setIsAuthenticated(false);
  };

  const handleLoginSuccess = async () => {
    // Appeler la fonction de succès fournie en prop (checkAuthentication)
    await checkAuthentication();
  };

  return (
    <div>
      <h1>Espace Admin</h1>

      <div>
        <button onClick={handleLogout}>Déconnexion</button>
        <CrudPage />
      </div>

      <AuthForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default Admin;
