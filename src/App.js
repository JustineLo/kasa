import { Routes, Route } from "react-router-dom";
import Apropos from "./view/Apropos";
import Home from "./view/Home";
import Logements from "./view/Logements";
import ErrorPage from "./view/ErrorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="logements" element={<Logements />} />
        <Route path="apropos" element={<Apropos />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
