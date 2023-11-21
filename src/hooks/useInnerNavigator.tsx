import { useNavigate } from "react-router-dom";

import { staticServerUrl } from "../constants/url";

function useInnerNavigator() {
  const navigate = useNavigate();

  const push = (path: string) => {
    navigate(staticServerUrl + path);
  };

  return {
    push,
  };
}

export default useInnerNavigator;
