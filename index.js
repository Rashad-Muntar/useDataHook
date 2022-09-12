import React, { useEffect, useState } from "react";

const useData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      setData(response.json());
    };
    fetchData();
  }, []);

  return data;
};

export default useData;
