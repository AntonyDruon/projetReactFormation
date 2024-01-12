// Importez les hooks nécessaires
import { useState, useEffect } from "react";
import AddPastriesForm from "../Form/AddPastriesForm";
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
        await checkAuthentication();
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (authenticationData) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [authenticationData]);

  const handleLogout = async () => {
    try {
      await logout();
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleLoginSuccess = async () => {
    await checkAuthentication();
  };

  return (
    <div>
      <h1>Espace Admin</h1>
      {isAuthenticated ? (
        <div >
          <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
          <button onClick={handleLogout}>Déconnexion</button>
          </div>
          
          <CrudPage />
          <AddPastriesForm/>
        </div>
      ) : (
        <AuthForm onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default Admin;
