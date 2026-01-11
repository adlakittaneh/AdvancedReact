import { useEffect, useState } from "react";

export function useInView(ref) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting));
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return inView;
}
