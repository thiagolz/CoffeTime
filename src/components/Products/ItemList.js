import { useEffect } from "react";
import "./ItemList.css";
import Item from "./Item";
export default function ItemList({ items }) {
  return (
    <div className="product-container">
      {items.map((item) => (
        <Item key={item.id} Item={item} />
      ))}
    </div>
  );
}
