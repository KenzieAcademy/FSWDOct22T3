import { Form } from "react-bootstrap";
import ControlledInput from "../ControlledInput/ControlledInput";
import { useState } from "react";
import api from "../../utils/api.utils";
import FormSubmitInput from "../FormSubmitInput/FormSubmitInput";
import useAuth from "../../hooks/useAuth";

const initialState = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const [loginData, setLoginData] = useState(initialState);
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState(initialState);
  const { signIn } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    signIn(loginData.email, loginData.password);
  };

  const handleChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  return (
    <Form onSubmit={handleSubmit}>
      <ControlledInput
        name="email"
        label="Email"
        value={loginData.email}
        error={errors.email}
        onChange={handleChange}
      />
      <ControlledInput
        type="password"
        name="password"
        label="Password"
        value={loginData.password}
        error={errors.password}
        onChange={handleChange}
      />
      <FormSubmitInput />
    </Form>
  );
};

export default LoginForm;
