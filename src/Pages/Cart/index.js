import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { useCart } from "../../contexts/cart";
import "./styles.css";
import img_footer from './capa_neon_gym.png'

export function Cart() {
  const { productList, total, removeProduct } = useCart();

  console.log(productList);
  return (
    <div className="master">
      <Header />
      <div className="cart">
        <div className="container">
          <div className="card">

            <h1>Confira o carrinho!</h1>
            <section className="cart_info">
              <span className="total">
                Total: &nbsp;
                {Number(total).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <div className="remove">
                <Link to="/purchase">Prosseguir com a compra</Link></div>
            </section>
            <section className="cart_list">
              <ul>
                <div className="row">
                  {productList.map((product) => (
                    <li className="col-md-3" key={product.id}>
                      <Link to={`/product/${product.id}`}>
                        <img
                          src="https://images.unsplash.com/photo-1581441363689-1f3c3c414635?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
                        // src={
                        //   "https://mais-arvores-api.herokuapp.com/products/download/" +
                        //   product.image
                        // }
                        />
                      </Link>


                      <div className="cart_list_detail">
                        <span>{product.description}</span>
                        <span>
                          {Number(product.price).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </span>
                      </div>

                      <p>Quantidade: {product.quantity}</p>
                      <button onClick={() => removeProduct(product)}>Remover</button>
                    </li>
                  ))}
                </div>

              </ul>
            </section>
            
          </div>
          
        </div>
      </div>
        <div className="footer_img">
          <img className="img_F" src={img_footer}></img>
        </div>
    </div>
    
  );
}
