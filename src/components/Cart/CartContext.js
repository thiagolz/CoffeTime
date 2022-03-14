import { createContext, useState } from "react";
export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (quantity, item) => {
    if (isOnCart(item.id)) {
      increaseItem(quantity, item);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const isOnCart = (id) => {
    const respuesta = cart.some((prod) => prod.id === id);
    return respuesta;
  };

  const increaseItem = (quantity, item) => {
    const clon = [...cart];
    clon.forEach((product) => {
      if (product.id === item.id) {
        product.quantity += quantity;
      }
    });
  };

  const emptyCart = () => {
    setCart([]);
  };

  const deleteItem = (id) => {
    let filterCart = cart.filter((item) => item.id !== id);
    setCart(filterCart);
  };

  const totalCart = () => {
    let count = 0;
    cart.forEach((item) => {
      count += item.price * item.quantity;
    });
    return count;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteItem,
        isOnCart,
        increaseItem,
        emptyCart,
        totalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
