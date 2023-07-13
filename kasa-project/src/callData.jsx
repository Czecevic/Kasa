/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
export const callData = () => {
  const [data, setData] = useState([]);
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
