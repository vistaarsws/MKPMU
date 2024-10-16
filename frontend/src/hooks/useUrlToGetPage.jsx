import { useLocation } from "react-router-dom";

const useUrlToGetPage = () => {
  const { pathname } = useLocation();

  return pathname.split("/").pop();
};

export default useUrlToGetPage;
