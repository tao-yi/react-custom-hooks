import { useEffect, useState } from "react";

const useFetch = (input: RequestInfo) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(input)
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch the data for url " + input);
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setIsPending(false);
        setError(null);
      })
      .catch((e) => {
        setIsPending(false);
        setError(e.message);
      });
  }, [input]);

  return { data, isPending, error };
};

export default useFetch;
