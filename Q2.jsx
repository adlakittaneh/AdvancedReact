export default function VirtualList({ items }) {
  const itemHeight = 30;
  const height = 300;

  const start = Math.floor(window.scrollY / itemHeight);
  const visible = items.slice(start, start + 20);

  return (
    <div style={{ height, overflow: "auto" }}>
      <div style={{ height: items.length * itemHeight }}>
        {visible.map((item, i) => (
          <div key={i} style={{ height: itemHeight }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
