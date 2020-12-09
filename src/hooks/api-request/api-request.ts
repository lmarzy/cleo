import { useState, useEffect } from 'react';

export const useApiRequest = (
  url: string,
): { error: string; isLoaded: boolean; data: any[] } => {
  const [data, setData] = useState<any>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoaded(true);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { error, isLoaded, data };
};
