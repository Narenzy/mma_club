// import { useState } from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
