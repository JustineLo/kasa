import { Routes, Route } from "react-router-dom";
import Apropos from "./view/Apropos";
import Home from "./view/Home";
import Logements from "./view/Logements";
import ErrorPage from "./view/ErrorPage";
import Layout from "./layouts/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="logements/:id" element={<Logements />} />
          <Route path="apropos" element={<Apropos />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
