import { useState, useEffect } from "react";

function getSavedValue<T>(key: string, initialValue: T) {
  const v = localStorage.getItem(key);
  if (v) {
    return JSON.parse(v);
  }

  if (initialValue instanceof Function) {
    return initialValue();
  }

  return initialValue;
}

function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
