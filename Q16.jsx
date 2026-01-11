export function useDropdown(items) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const onKey = e => {
    if (e.key === "ArrowDown") setIndex(i => i + 1);
    if (e.key === "ArrowUp") setIndex(i => i - 1);
  };

  return { open, setOpen, index, onKey };
}
