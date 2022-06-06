import React, { useState, useContext } from "react";
import * as yup from "yup";
import { Header } from "../../Components/Header";
import { AuthContext } from "../../contexts/auth";
import "./styles.css";

const schema = yup.object({
  username: yup.string().required("O nome de usuário é obrigatório"),
  email: yup
    .string()
    .email("Deve ser informado um e-mail válido")
    .required("O E-mail é obrigatório"),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      "A senha precisa ter no mínimo 8 caracteres, " +
        "uma letra maiúscula e uma letra minúscula, " +
        "um número"
    ),
});

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    register(username, email, password);
  };

  return (
    <>
      <Header />
      <main className="register">
        <div className="register_form">
          <form onSubmit={handleSubmit}>
            <h1>CADASTRO</h1>

            <div className="register_form_fields">
              <label>
                Nome de usuário
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="nome_de_usuario"
                />
                {/* <span>{errors.username?.message}</span> */}
              </label>
            </div>

            <div className="register_form_fields">
              <label>
                E-mail
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@exemplo.com"
                />
                {/* <span>{errors.email?.message}</span> */}
              </label>
            </div>

            <div className="register_form_fields">
              <label>
                Senha
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                />
                {/* {errors.password && (
            <span>
              *A senha precisa ter no mínimo 8 caracteres; <br /> *A senha
              precisa ter no mínimo uma letra maiúscula, <br />
              uma minúscula e um número
            </span>
          )} */}
              </label>
            </div>

            <button className="register_form_button" type="submit">
              CADASTRAR-SE
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
