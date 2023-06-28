import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header, LoginForm } from "./components";
import { AuthPage, ProtectedPage } from "./pages";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { useEffect, useState } from "react";
import useAuth from "./hooks/useAuth";

function App() {
  const [loading, setLoading] = useState(true);
  const { refreshToken } = useAuth();

  useEffect(() => {
    refreshToken()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Pretend this is a spinner</p>;

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="auth"
          element={
            <AuthPage
              forms={[
                <LoginForm key="login" />,
                <RegisterForm key="register" />,
              ]}
            />
          }
        />
        <Route path="protected" element={<ProtectedPage />} />
      </Routes>
    </>
  );
}

export default App;
