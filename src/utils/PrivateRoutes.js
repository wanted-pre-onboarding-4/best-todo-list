import { useEffect } from "react";
import { Outlet } from "react-router";
import { useNavigate } from "react-router-dom";

const PrivateRoutes = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Outlet />;
};

export default PrivateRoutes;
