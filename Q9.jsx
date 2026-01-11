export default function Comments() {
  const [comments, setComments] = useState([]);

  const add = async text => {
    const tempId = Date.now();
    setComments(c => [...c, { id: tempId, text }]);

    try {
      const realId = tempId + 1;
      setComments(c =>
        c.map(x => x.id === tempId ? { ...x, id: realId } : x)
      );
    } catch {
      setComments(c => c.filter(x => x.id !== tempId));
    }
  };
}
