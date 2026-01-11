const move = (board, from, to) => {
  const copy = structuredClone(board);
  const card = copy[from.col].cards.splice(from.i, 1)[0];
  copy[to.col].cards.splice(to.i, 0, card);
  return copy;
};
