import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import wellcomeImg from "../../assets/login/wellcome.png";
import "./styles.css";
import { Header } from "../../Components/Header";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { login, token } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  return (
    <>
      <Header />
      <main className="login">
        <form onSubmit={handleSubmit} className="login_form">
          <img src={wellcomeImg} alt="Bem vindo" />
          <div className="login_form_fields">
            <label>
              E-mail
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="login_form_fields">
            <label>
              Senha
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <div className="login_form_button">
            <button type="submit">ENTRAR</button>
          </div>

          <span>
            Não possui uma conta? <Link to="/register">Cadastre-se aqui!</Link>
          </span>
        </form>
      </main>
    </>
  );
}
