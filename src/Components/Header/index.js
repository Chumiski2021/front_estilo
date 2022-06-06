import React from "react";
import { FaCartPlus, FaUser } from "react-icons/fa";

import "./index.css";
import { useAuth } from "../../contexts/auth";
import { Link } from "react-router-dom";

export function Header() {
  const { token } = useAuth();

  return (
    <header className="header">
      <div className="header_logo">
        <Link to="/"></Link>
      </div>
      <nav className="header_nav">
        <ul className="header_nav_ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          {token && (
            <li>
              <Link to="/products">Produtos</Link>
            </li>
          )}
          <li>
            {token ? (
              <Link to="/user">
                <FaUser />
              </Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          <li>
            {token && (
              <Link to="/cart">
                <FaCartPlus />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
