import "./ItemDetail.css";
import { Box } from "@chakra-ui/react";
import reactRouterDomimport from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemCount from "../Utils/ItemCount";

export default function ItemDetail({ item }) {
  const [itemAmount, SetItemAmount] = useState();
  useEffect(() => {
    console.log(itemAmount);
  }, [itemAmount]);

  //When click AddItem button at Itemcount, //Parent Function// execute
  function OnAddItem(newItemCount) {
    SetItemAmount(newItemCount);
  }
  return (
    <Box bgGradient="linear(red.100 20%, orange.50 5%, yellow.100 50%)">
      <div className="Item-Detail-container">
        <Link to={`/products/${item.id}`}>
          <img src={item.image} alt="Product Image" />
          <div className="card-container">
            <p className="price">$ {item.price}</p>
            <p className="title">{item.title}</p>
            <p className="description">{item.description}</p>
          </div>
        </Link>
        {!itemAmount ? (
          <ItemCount stock={10} initial={1} onAdd={OnAddItem} />
        ) : (
          <Link to="/cart">Checkout</Link>
        )}
      </div>
    </Box>
  );
}
