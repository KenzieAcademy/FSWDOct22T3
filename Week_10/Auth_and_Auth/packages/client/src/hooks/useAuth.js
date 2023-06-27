import { useContext } from "react";
import { authContext } from "../contexts/authContext";
import api, { setAuthHeaders } from "../utils/api.utils";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const { auth, setAuth } = useContext(authContext);
  const navigate = useNavigate();

  const signUp = async (email, password, confirmPassword) => {};

  const signIn = async (email, password) => {
    api.post("/auth/signin", { email, password }).then((response) => {
      const { token, user } = response.data;
      setAuth({
        isAuthenticated: true,
        user: user,
      });
      setAuthHeaders(token);
      navigate("/protected");
    });
  };

  const signOut = () => {};

  return {
    auth,
    signUp,
    signIn,
    signOut,
  };
};

export default useAuth;
