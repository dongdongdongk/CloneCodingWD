import Hero from "./components/hero/Hero"
import { Navbar } from "./components/navbar/Navbar"
import Portfolio from "./components/portfolio/Portfolio"
import Services from "./components/services/Services"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
    </>
  )
}

export default App
