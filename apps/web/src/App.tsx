import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Contacts from "./components/Contacts/Contacts.tsx";
import Programs from "./components/Programs/Programs.tsx";
// import Footer from "../Footer/Footer";

import About from "./components/About/About.tsx";
import Taem from "./components/Team/Team.tsx";
import Benefits from "./components/Benefits/Benefits.tsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <About></About>
        <Programs></Programs>
        <Benefits></Benefits>
        <Taem></Taem>
        <Contacts></Contacts>
      </main>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
