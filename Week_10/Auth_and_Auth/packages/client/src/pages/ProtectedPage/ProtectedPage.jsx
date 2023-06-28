import { useEffect } from "react";
import api from "../../utils/api.utils";
import { Button } from "react-bootstrap";

const ProtectedPage = () => {
  useEffect(() => {
    requestProtectedResource();
  }, []);

  const requestProtectedResource = () =>
    api
      .get("/protected")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

  return (
    <div>
      <Button onClick={requestProtectedResource}>Request Again</Button>
    </div>
  );
};

export default ProtectedPage;
