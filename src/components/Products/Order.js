import { useEffect } from "react";

import {
  addDoc,
  getDocs,
  collection,
  getFirestore,
  writeBatch,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { useContext, useState } from "react";
import { db } from "../../firebase";
import swal from "sweetalert2";
import { CartContext } from "../Cart/CartContext";
import * as firebase from "firebase/app";

import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Order = () => {
  //Campos del formulario
  const { cart, setCart, emptyCart, deleteItem, totalCart } =
    useContext(CartContext);
  const [formValue, setFormValue] = useState();
  const [order, setOrder] = useState();

  useEffect(() => {
    setOrder({
      date: new Date().toDateString(),
      total: totalCart(),
      items: cart,
      buyer: formValue,
    });
  }, [formValue, cart]);

  const handleInputChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  const askOrder = async (e) => {
    e.preventDefault();
    try {
      const orderCollection = await collection(db, "orders");
      const addOrder = await addDoc(orderCollection, order);
      swal.fire(`Succesfull operation your ID is: ${addOrder.id}.`);
      window.location.reload(false);

      const CartItemsUdt = order.items.map((item) => item.id);
      const itemsUpdate = await query(
        collection(db, "Items"),
        where(documentId(), "in", CartItemsUdt)
      );
      const itemsUpdateSnapshot = await getDocs(itemsUpdate);
      const batch = writeBatch(db);

      itemsUpdateSnapshot.docs.forEach((itemSnapShot, index) => {
        batch.update(itemSnapShot.ref, {
          stock: itemSnapShot.data().stock - order.items[index].quantity,
        });
      });
      await batch.commit();
      console.log("Stock updated");
      setCart([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className="order-container">
      {cart.length == 0 ? (
        <div>
          <p>You have no items in your cart, go back and add some!</p>

          <Link to="/">
            <p>Back Home </p>
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <ul>
            {cart.map((cart) => (
              <li key={cart.id}>
                <p>Title: {cart.title}</p>
                <p>Price: ${cart.price}</p>
                <p>Quantity: {cart.quantity}</p>
                <button onClick={() => deleteItem(cart.id)}>Delete Item</button>
                <hr />
              </li>
            ))}
          </ul>
          <div>
            {/* <p>Quantity({totalPerProduct()})</p> */}
            <p>Total price (${totalCart()})</p>
          </div>

          <form onSubmit={askOrder}>
            <div>
              <label>Full Name:</label>
              <input type="text" name="name" onChange={handleInputChange} />
            </div>
            <div>
              <label>Celphone:</label>
              <input type="text" name="phone" onChange={handleInputChange} />
            </div>
            <div>
              <label>Mail:</label>
              <input type="email" name="email" onChange={handleInputChange} />
            </div>
            <button type="submit">Confirm the purchase.</button>
          </form>

          <button onClick={emptyCart}>Clear</button>
        </div>
      )}
    </Box>
  );
};
