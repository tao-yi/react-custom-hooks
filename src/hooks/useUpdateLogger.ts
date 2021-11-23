import { useEffect } from "react";

function useUpdateLogger<T>(value: T) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}

export default useUpdateLogger;
