import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [productList, setProductList] = useState([]);
  const [total, setTotal] = useState(0);

  function addProduct(product) {
    console.log(product);
    const products = productList;
    products.push(product);
    setProductList(products);

    setTotal(total + Number(product.price) * product.quantity);
  }

  function removeProduct(product) {
    if (productList.length <= 1) {
      setProductList([]);
      setTotal(0);
    } else {
      const newProductList = productList.filter((e) => e.id !== product.id);
      setProductList(newProductList);
      setTotal(total - Number(product.price) * Number(product.quantity));
    }
  }

  function isProductInList(id) {
    let isProductInCart = false;

    productList.forEach((product) => {
      if (product.id === id) {
        isProductInCart = true;
      }
    });

    return isProductInCart;
  }

  return (
    <CartContext.Provider
      value={{
        total,
        removeProduct,
        addProduct,
        productList,
        isProductInList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
