import { Form } from "react-bootstrap";

const ControlledInput = ({
  label,
  name,
  value,
  placeholder,
  error,
  onChange,
  type = "text",
  showLabel = true,
}) => {
  return (
    <Form.Group className="mb-2">
      <Form.Label className={!showLabel && "hide"} htmlFor={name}>
        {label || name}
      </Form.Label>
      <Form.Control
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isInvalid={error}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default ControlledInput;
