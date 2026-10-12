import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Contacts from "./components/Contacts/Contacts.tsx";
// import Footer from "../Footer/Footer";

import About from "./components/About/About.tsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <About></About>
        <Contacts></Contacts>
      </main>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
