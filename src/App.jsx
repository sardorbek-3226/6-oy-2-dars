import Info from "./components/Info"
import About from "./components/about"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Rich from "./components/Rich"
import Add from "./components/Add"
import Birda from "./components/Birda"
import User from "./components/User"
import Woman from "./components/Woman"
import Usabout from "./components/Usabout"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Rich/>
      <Add/>
      <Birda/>
      <Info/>
      <User/>
      <Woman/>
      <Usabout/>
      <Footer />
    </div>
  )
}

export default App