import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

import AppRoutes from "./AppRoutes";
import Header from "./Components/Header";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
