import { useState } from "react";

export default function Editor() {
  const [past, setPast] = useState([]);
  const [present, setPresent] = useState("");
  const [future, setFuture] = useState([]);

  const undo = () => {
    if (!past.length) return;
    setFuture([present, ...future]);
    setPresent(past[past.length - 1]);
    setPast(past.slice(0, -1));
  };

  const redo = () => {
    if (!future.length) return;
    setPast([...past, present]);
    setPresent(future[0]);
    setFuture(future.slice(1));
  };

  return <textarea value={present} />;
}
