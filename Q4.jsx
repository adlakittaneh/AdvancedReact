import { useState } from "react";

export default function Login() {
  const [status, setStatus] = useState("idle");

  const login = async () => {
    setStatus("loading");
    try {
      await new Promise(r => setTimeout(r, 1000));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  switch (status) {
    case "loading": return <p>Loading...</p>;
    case "success": return <p>Welcome</p>;
    case "error": return <p>Error</p>;
    default: return <button onClick={login}>Login</button>;
  }
}
