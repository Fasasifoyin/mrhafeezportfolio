import "./styles/index.scss";
import Layout from "./Layout";
import About from "./sections/About";
import Resume from "./sections/Resume";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

function App() {
  return (
    <Layout>
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </Layout>
  );
}

export default App;
