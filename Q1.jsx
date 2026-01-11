import { useEffect, useState } from "react";
export function Link({ to, children }) {
  return (
    <a
      href={to}
      onClick={e => {
        e.preventDefault();
        window.history.pushState({}, "", to);
        window.dispatchEvent(new PopStateEvent("popstate"));
      }}
    >
      {children}
    </a>
  );
}

export function Route({ path, children }) {
  return window.location.pathname === path ? children : null;
}

export default function Router({ children }) {
  const [, setTick] = useState(0);

  useEffect(() => {
    const onChange = () => setTick(t => t + 1);
    window.addEventListener("popstate", onChange);
    return () => window.removeEventListener("popstate", onChange);
  }, []);

  return children;
}
