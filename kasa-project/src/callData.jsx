import { useEffect, useState } from "react";
export const callData = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchData = async () => {
      const rep = await fetch("/data/data.json");
      const repValid = await rep.json();
      setData(repValid);
    };

    fetchData();
  }, []);

  return data;
};
