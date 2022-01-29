import React, { useState } from "react";
import { useEffect } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setcount] = useState(initial);
  const [max, setMax] = useState(stock);
  const [addbutton, setAddButton] = useState(true);
  const [Deletebutton, setDeleteButton] = useState(true);
  //ADD ITEM//
  const Increase = () => {
    setcount(count + 1);
    setMax(max - 1);
    setDeleteButton(true);
  };
  //DELETE ITEM//
  const Decrease = () => {
    setcount(count - 1);
    setMax(max + 1);
    setAddButton(true);
  };
  useEffect(() => {
    if (count === 1) {
      console.log("Just one item available");
      setDeleteButton(false);
    } else if (count > stock) {
      console.log("You can not buy more than six items!");
      setAddButton(false);
    }
  }, [count]);

  return (
    <>
      <div className="counter-conteiner">
        <div className="counter">
          <button
            onClick={Decrease}
            className="btn-quantity"
            disabled={!addbutton}
            type="button"
          >
            -
          </button>
          <input type="text" />
          <button
            onClick={Increase}
            className="btn-quantity"
            disabled={!Deletebutton}
          >
            +
          </button>
        </div>
      </div>

      <button
        className="cart-add-btn"
        type="button"
        onClick={() => onAdd(count)}
      >
        Add Item
      </button>
    </>
  );
};

export default ItemCount;
