import { useEffect, useRef } from "react";

export function useEventListener(target, event, handler) {
  const saved = useRef(handler);
  saved.current = handler;

  useEffect(() => {
    const listener = e => saved.current(e);
    target.addEventListener(event, listener);
    return () => target.removeEventListener(event, listener);
  }, [target, event]);
}
