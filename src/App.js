import About from "./components/About"
import Container from "./components/Container"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import SpoInfo from "./components/SpoInfo"
function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <SpoInfo />
      <About />
      <Project />
    </Container>
  )
}

export default App
