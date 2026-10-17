import { useState } from "react";

import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Contacts from "./components/Contacts/Contacts.tsx";
import Programs from "./components/Programs/Programs.tsx";
import About from "./components/About/About.tsx";
import Team from "./components/Team/Team.tsx";
import Benefits from "./components/Benefits/Benefits.tsx";
import Classes from "./components/Classes/Classes.tsx";
import Pricing from "./components/Pricing/Pricing.tsx";
import FreeTrial from "./components/FreeTrial/FreeTrial.tsx";

function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  return (
    <>
      <Header></Header>
      <main>
        <Hero setSelectedPlanId={setSelectedPlanId}></Hero>
        <About></About>
        <Programs></Programs>
        <Benefits></Benefits>
        <Team></Team>
        <Classes></Classes>
        <Pricing
          selectedPlanId={selectedPlanId}
          setSelectedPlanId={setSelectedPlanId}
        ></Pricing>
        <FreeTrial setSelectedPlanId={setSelectedPlanId}></FreeTrial>
        <Contacts
          selectedPlanId={selectedPlanId}
          setSelectedPlanId={setSelectedPlanId}
        ></Contacts>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
