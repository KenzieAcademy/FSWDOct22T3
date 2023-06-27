import { Button, Form } from "react-bootstrap";

const FormSubmitInput = () => {
  return (
    <Form.Group className="mb-2">
      <Button className="w-100" type="submit" variant="primary">
        Submit
      </Button>
    </Form.Group>
  );
};

export default FormSubmitInput;
