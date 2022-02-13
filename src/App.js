import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import Technologies from "./components/Technologies/Technologies";
import { Designer } from "./components/designer/designer";
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Navbar />
          <Home />
          <About />
          <Technologies />
          <Projects />
          <Footer />
          <Designer />
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
