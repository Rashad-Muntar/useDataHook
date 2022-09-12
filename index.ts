import { useEffect, useState } from "react";

const useDataFetch = (url:string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
     const response = await fetch(url)
        const data  = await response.json()
        setData(data)
    };
    fetchData();
  }, []);

  return data;
};

export default useDataFetch;