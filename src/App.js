import About from "./components/About"
import Child from "./components/Child"
import Contact from "./components/Contact"
import Container from "./components/Container"
import Hero from "./components/Hero"
import SpoInfo from "./components/SpoInfo"
import ReactGA from "react-ga"
const TRACKING_ID = "UA-G-GCTBSYP6HG" // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID)
function App() {
  return (
    <Container>
      <Contact />
      <Hero />
      <SpoInfo />
      <Child />
      <About />
    </Container>
  )
}

export default App
