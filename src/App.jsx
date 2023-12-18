import { useRoutes } from "react-router-dom"
import Routes from './Routes'
import "./App.css";

function App() {
  let myRoutes = useRoutes(Routes)
  return myRoutes
}

export default App