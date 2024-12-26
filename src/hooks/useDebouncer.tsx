import { useCallback, useRef,useEffect } from "react";

export function useDebouncer<T>(callback: (arg: T) => void, delay = 500) {
  const timerRef = useRef<number | null>(null);

  const debouncedCallback = useCallback(
    (arg: T) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = window.setTimeout(() => {
        callback(arg);
      }, delay);
    },
    [callback, delay]
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return debouncedCallback;
}
