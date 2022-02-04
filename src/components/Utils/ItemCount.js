import React, { useState } from "react";
import { useEffect } from "react";
import "./itemcount.css";
import { Box } from "@chakra-ui/react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setcount] = useState(initial);
  const [max, setMax] = useState(stock);
  const [addbutton, setAddButton] = useState(true);
  const [Deletebutton, setDeleteButton] = useState(true);
  //ADD ITEM//
  function Increase() {
    if (count < stock) {
      setcount(count + 1);
    }
  }
  //DELETE ITEM//
  function Decrease() {
    if (count > 0) {
      setcount(count - 1);
    }
  }
  function AddItem() {
    onAdd(count);
  }
  useEffect(() => {
    if (count === 1) {
      console.log("one item available");
      setDeleteButton(false);
    } else if (count > stock) {
      console.log("You can not buy more than 10 items!");
      setAddButton(false);
    }
  }, [count]);

  return (
    <>
      <Box>
        <div className="counter-conteiner">
          <div className="counter">
            <button
              onClick={Decrease}
              className="btn-quantity"
              // disabled={!addbutton}
              type="button"
            >
              <strong>-</strong>
            </button>
            <p className="counter-text">{count}</p>
            <button onClick={Increase} className="btn-quantity">
              <strong>+</strong>
            </button>
          </div>
        </div>

        <button className="cart-add-btn" onClick={AddItem}>
          Add Item
        </button>
      </Box>
    </>
  );
};

export default ItemCount;
