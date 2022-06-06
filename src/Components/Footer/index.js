import "./../Footer/styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Mais Árvores. Todos os direitos reservados.
      </p>
    </footer>
  );
}
