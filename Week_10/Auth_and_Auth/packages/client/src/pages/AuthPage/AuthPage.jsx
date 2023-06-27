import { useState } from "react";
import { Container, Form } from "react-bootstrap";

const AuthPage = ({ forms }) => {
  const [form, setForm] = useState(forms[0]);

  const toggleForm = () => setForm(form === forms[0] ? forms[1] : forms[0]);

  return (
    <Container>
      <div className="auth-form-container">{form}</div>
      <Form.Switch checked={form === forms[1]} onChange={toggleForm} />
    </Container>
  );
};

export default AuthPage;
