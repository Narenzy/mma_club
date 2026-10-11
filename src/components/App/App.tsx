// import { useState } from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Contacts from "../Contacts/Contacts";
// import Footer from "../Footer/Footer";
import "./App.css";
import About from "../About/About";

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
