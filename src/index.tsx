import { AuthContextPoriver } from "context/AuthContext";
import { ThemeContextProvider } from "context/ThemeContext";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ThemeContextProvider>
    <AuthContextPoriver>
      <Router>
        <App />
      </Router>
    </AuthContextPoriver>
  </ThemeContextProvider>
);
