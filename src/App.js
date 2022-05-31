import About from "./components/About"
import Child from "./components/Child"
import Contact from "./components/Contact"
import Container from "./components/Container"
import Hero from "./components/Hero"
import SpoInfo from "./components/SpoInfo"
function App() {
  return (
    <Container>
      <Hero />
      <SpoInfo />
      <Child />
      <About />
      <Contact />
    </Container>
  )
}

export default App
