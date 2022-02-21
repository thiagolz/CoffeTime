import "./ItemDetail.css";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ItemCount from "../Utils/ItemCount";
import { CartContext } from "../Cart/CartContext";
import { MessageContext } from "../context/MessageContext";

export default function ItemDetail({ item }) {
  const [itemAmount, SetItemAmount] = useState();

  //import
  const { addToCart, cart } = useContext(CartContext);
  const { hadleMessage } = useContext(MessageContext);

  useEffect(() => {
    console.log(itemAmount);
  }, [itemAmount]);

  //When click AddItem button at Itemcount, //Parent Function// execute
  function OnAddItem(quantity) {
    SetItemAmount(quantity);
    addToCart(quantity, item);
    hadleMessage("You just added an item!", "success");
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
          <div className="checkout-container">
            <div className="div-checkout">
              <Link to="/cart" className="btn-checkout">
                Checkout
              </Link>
            </div>
            <div className="add-product">
              <Link to="/" className="btn-products">
                Add more items
              </Link>
            </div>
          </div>
        )}
      </div>
    </Box>
  );
}
