import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <AboutUs />
      <Services />
    </div>
  );
}

export default App;
