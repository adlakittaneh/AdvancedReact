import { useEffect, useRef } from "react";

export default function Modal({ onClose }) {
  const prev = useRef(document.activeElement);

  useEffect(() => {
    return () => prev.current.focus();
  }, []);

  return <div tabIndex={-1}>Modal</div>;
}
