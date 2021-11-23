import { DependencyList, useEffect } from "react";
import useTimeout from "./useTimeout";

const useDebounce = (callback: any, delay: number, deps: DependencyList) => {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...deps, reset]);

  useEffect(clear, []);
};

export default useDebounce;
