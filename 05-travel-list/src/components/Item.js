export function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <li
      style={
        item.packed
          ? {
              textDecoration: "line-through",
            }
          : {}
      }
    >
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
