import Navbar from "./components/navigation/navbar"
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
