import "./item.css";

export default function Item({ Item }) {
  return (
    <div className="product-container">
      <img src={Item.image} alt="Product Image" />
      <div>
        <p className="price">$ {Item.price}</p>
        <p className="title">{Item.title}</p>
      </div>
    </div>
  );
}
