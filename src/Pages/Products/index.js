import { getProducts } from "../../services/api";
import { useEffect, useState } from "react";
import Footer from "../../Components/Footer";
import "./styles.css";
import { Header } from "../../Components/Header";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getProducts();
      setProducts(response.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <div className="products_loading">Carregando dados</div>;
  }

  return (
    <div>
      <Header />
      <main className="products">
        <h1>Produtos</h1>

        <div className="products_list">
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img
                    className="card-img-top"
                    src="https://images.unsplash.com/photo-1581441363689-1f3c3c414635?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
                    // src={
                    //   "https://mais-arvores-api.herokuapp.com/products/download/" +
                    //   product.image
                    // }
                  />
                </Link>

                <p>{product.description}</p>
                <span>Preço: R$ {product.price}</span>
                <span>Categoria: {product.category.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
