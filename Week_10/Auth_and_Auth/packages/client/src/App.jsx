import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header, LoginForm } from "./components";
import { AuthPage, ProtectedPage } from "./pages";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {
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
