import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header";
import { useAuth } from "../../contexts/auth";
import { api } from "../../services/api";
import "./styles.css";

export function User() {
  const { logout, userId } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
    api.get(`/users/${userId}`).then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <main className="user">
        <div className="dados">
          <div className="info">
            <h1>Meus Dados</h1>
            <section className="user_detail">
              <p>Nome: {user?.username}</p>
              <p>E-mail: {user?.email}</p>
            </section>
            <button onClick={logout} className="user_logout">
              logout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
