import { useEffect } from "react";
import api from "../../utils/api.utils";

const ProtectedPage = () => {
  useEffect(() => {
    api.get("/protected").then((response) => console.log(response));
  }, []);

  return <div>ProtectedPage</div>;
};

export default ProtectedPage;
