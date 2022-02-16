import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //ADD TO CART//
  const addToCart = (quantity, item) => {
    if (isOnCart(item.id)) {
      increaseItem(quantity, item);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };
  // VERIFY IF ITS ON CART
  const isOnCart = (id) => {
    const respuesta = cart.some((prod) => prod.id === id);
    return respuesta;
  };

  //+++//

  const increaseItem = (quantity, item) => {
    const copy = [...cart];
    copy.forEach((product) => {
      if (product.id === item.id) {
        product.quantity += quantity;
      }
    });
  };

  // CLEAR ITEM
  const emptyCart = () => {
    setCart([]);
  };

  //DELETE ITEM
  const deleteProduct = (id) => {
    let filterCart = cart.filter((prod) => prod.id !== id);
    setCart(filterCart);
  };
  // // CALCULATE TOTAL
  // function totalPerProduct(id) {
  //   let ItemCost = cart.find((prod) => prod.id === id);
  //   return ItemCost.priceProduct * ItemCost.quantityProduct;
  // }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, isOnCart, increaseItem, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
