import { Route, Routes } from "react-router-dom"
import Apropos from "./view/Apropos"
import ErrorPage from "./view/ErrorPage"
import Home from "./view/Home"
import Logements from "./view/Logements"

const ReactRouter = ({logements}) => {
    return (
        <Routes>
          <Route path="/" element={<Home logements={logements} />} />
          <Route
            path="logements/:id"
            element={<Logements logements={logements} />}
          />
          <Route path="apropos" element={<Apropos />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default ReactRouter;
