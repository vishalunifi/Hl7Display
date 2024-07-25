import { useEffect, useState } from "react";
import axios from "axios";

export function useGetADTList<T>(initialData: T) {
  const [data, setData] = useState<T>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:8080/adt");
      setData(response.data);
    } catch (err) {
      setError("There was an error fetching the data!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, fetchData, isLoading, error] as const;
}
