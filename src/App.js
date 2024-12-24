import Navbar from "./components/navigation/navbar"
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Container from "./components/container/container";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Intro />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
