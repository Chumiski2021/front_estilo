import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../Components/Header";
import { useCart } from "../../contexts/cart";
import { api } from "../../services/api";
import "./styles.css";

export function Product() {
  const { id } = useParams();
  const { addProduct, isProductInList } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    api.get(`/products/${id}`).then((response) => {
      const { data } = response;
      setProduct(data);
    });
  }, []);

  function handleAddProductToCart() {
    addProduct({ ...product, quantity: Number(quantity) });
  }

  return (
    <>
      <Header />
      <main className="product">
        <img src="https://images.unsplash.com/photo-1581441363689-1f3c3c414635?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470" />
        <div className="product_detail">
          <h2>{product?.description}</h2>
          <span>
            {Number(product?.price).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <input
            type="number"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            value={quantity}
          ></input>
          {!isProductInList(product?.id) ? (
            <button
              onClick={handleAddProductToCart}
              disabled={!Number(quantity)}
              className="product_detail_button"
            >
              Adicionar ao carrinho
            </button>
          ) : (
            <Link to="/cart" className="product_detail_button_cart">
              Ver carrinho
            </Link>
          )}
        </div>
      </main>
    </>
  );
}
