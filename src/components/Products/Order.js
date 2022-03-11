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
import "./Order.css";

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
      window.setInterval("refresh()", 10000);

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
            <p className="back-home">
              <strong>Back Home</strong>{" "}
            </p>
          </Link>
        </div>
      ) : (
        <Box display="block" justifyContent="center" className="cart-container">
          <ul>
            {cart.map((cart) => (
              <li key={cart.id}>
                <p>Title: {cart.title}</p>
                <p>Price: ${cart.price}</p>
                <p>Quantity: {cart.quantity}</p>
                <button
                  className="delete-btn"
                  onClick={() => deleteItem(cart.id)}
                >
                  Delete Item
                </button>
                <hr />
              </li>
            ))}
          </ul>
          <div>
            <p>
              <strong>Total price (${totalCart()})</strong>
            </p>
          </div>

          <form onSubmit={askOrder} className="form-control">
            <div className="col">
              <label>Full Name:</label>
              <input
                type="text"
                name="name"
                onChange={handleInputChange}
                className="input1"
              />
            </div>
            <div className="col">
              <label>Celphone:</label>
              <input
                type="text"
                name="phone"
                onChange={handleInputChange}
                className="input1"
              />
            </div>
            <div className="col">
              <label>Mail:</label>
              <input
                type="email"
                name="email"
                onChange={handleInputChange}
                className="input1"
              />
            </div>
            <button type="submit" className="confirm-btn">
              Confirm the purchase.
            </button>
          </form>

          <button className="clear-btn" onClick={emptyCart}>
            Clear
          </button>
        </Box>
      )}
    </Box>
  );
};
