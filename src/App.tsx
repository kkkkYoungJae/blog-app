import Loader from "components/Loader";
import Router from "components/Router";
import ThemeContext from "context/ThemeContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "firebaseApp";
import { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const context = useContext(ThemeContext);
  const auth = getAuth(app);
  const [init, setInit] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(!!auth.currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);

  return (
    <div className={context.theme === "light" ? "white" : "dark"}>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
    </div>
  );
}

export default App;
