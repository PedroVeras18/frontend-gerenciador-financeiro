import { BrowserRouter } from "react-router-dom"
import RoutesComponent from "./routes"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </div>
  )
}