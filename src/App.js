import "./App.css"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { AllRoutes } from "./routes/AllRoutes"

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App
