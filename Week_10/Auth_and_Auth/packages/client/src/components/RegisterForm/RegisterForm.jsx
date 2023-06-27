import { useState } from "react";
import api from "../../utils/api.utils";
import { Form } from "react-bootstrap";
import { ControlledInput, FormSubmitInput } from "../index";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};
const RegisterForm = () => {
  const [loginData, setLoginData] = useState(initialState);
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    api
      .post("/auth/signin", loginData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
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
      <ControlledInput
        type="password"
        name="confirmPassword"
        label="Confirm Password"
        value={loginData.confirmPassword}
        error={errors.confirmPassword}
        onChange={handleChange}
      />
      <FormSubmitInput />
    </Form>
  );
};

export default RegisterForm;
