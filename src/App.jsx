import "./styles/index.scss";
import Layout from "./Layout";
import About from "./sections/About";
import Resume from "./sections/Resume";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Layout>
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
