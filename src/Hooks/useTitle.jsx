import { useEffect } from "react";

const useTitle = (title = '') => {
  useEffect(() => {
    document.title = `${title} - CineMate`;
  });

  return null;
};

export default useTitle;
