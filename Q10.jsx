import { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";

const ToastCtx = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const add = msg => {
    const id = Date.now();
    setToasts(t => [...t, { id, msg }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3000);
  };

  return (
    <ToastCtx.Provider value={add}>
      {children}
      {ReactDOM.createPortal(
        toasts.map(t => <div key={t.id}>{t.msg}</div>),
        document.body
      )}
    </ToastCtx.Provider>
  );
}

export const useToast = () => useContext(ToastCtx);
