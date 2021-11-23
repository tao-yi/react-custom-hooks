import { DependencyList, useEffect, useRef } from "react";

const useUpdateEffect = (callback: any, deps: DependencyList) => {
  const firstRenderRef = useRef(true);
  useEffect(() => {
    // 首次不会执行callback
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    // 只有deps改变之后才会执行callback
    return callback();
  }, deps);
};

export default useUpdateEffect;
