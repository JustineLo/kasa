import { Routes, Route } from "react-router-dom";
import Apropos from "./view/Apropos";
import Home from "./view/Home";
import Logements from "./view/Logements";
import ErrorPage from "./view/ErrorPage";
import Layout from "./layouts/Layout";
import { useEffect, useState } from "react";
import ReactRouter from "./ReactRouter";

function App() {
  const [logements, setLogements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(false);

  useEffect(() => {
    fetch("/logements.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setLogements(json);
        setIsLoading(false);
      })
      .catch(() => {
        setErr(true);
        setIsLoading(false);
      });
  }, []);

  if (err) return <div>{err}</div>;

  if (isLoading) return <div>Chargement...</div>;

  return (
    <div className="App">
      <Layout>
        <ReactRouter logements={logements} />
      </Layout>
    </div>
  );
}

export default App;
