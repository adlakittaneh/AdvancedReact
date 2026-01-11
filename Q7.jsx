import { useEffect, useRef, useState } from "react";

export default function SafeInterval() {
  const [count, setCount] = useState(0);
  const ref = useRef(count);

  ref.current = count;

  useEffect(() => {
    const id = setInterval(() => {
      setCount(ref.current + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <p>{count}</p>;
}
