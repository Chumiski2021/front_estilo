import Footer from "../../Components/Footer";
import bannerImg from "../../assets/home/banner.png";
import plantaImg from "../../assets/home/planta.png";

import "./styles.css";
import { Header } from "../../Components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="home">
        <section className="home_banner">
          <img src={bannerImg} alt="Mais arvores" />
        </section>

        <section className="home_about">
          <div>
            <h3>SOBRE NÓS</h3>

            <p>
              O projeto Mais Árvores consiste em ajudar os habitantes a deixar
              suas casas, espaços de lazer e a cidade de Indaiatuba mais
              arborizada e verde, com o intuito de diminuir muitos dos problemas
              causados pela poluição atmosférica; já que ajudam a reduzir a
              temperatura do ambiente e melhoram a umidade relativa do ar pela
              evapotranspiração, evitam a erosão do solo e fornecem abrigo e
              comida a diversos seres vivos incluindo nós, seres humanos.
            </p>
          </div>

          <div>
            <img src={plantaImg} alt="Cuidamos das arvores" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
