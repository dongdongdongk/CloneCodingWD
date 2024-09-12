import { Contact } from "./components/contact/Contact"
import Hero from "./components/hero/Hero"
import { Navbar } from "./components/navbar/Navbar"
import Portfolio from "./components/portfolio/Portfolio"
import Reviews from "./components/reviews/Reviews"
import Services from "./components/services/Services"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Reviews />
      <Contact />
    </>
  )
}

export default App
