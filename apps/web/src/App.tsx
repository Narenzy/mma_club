import { useState } from "react";

import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Contacts from "./components/Contacts/Contacts.tsx";
import Programs from "./components/Programs/Programs.tsx";
import About from "./components/About/About.tsx";
import Team from "./components/Team/Team.tsx";
import Benefits from "./components/Benefits/Benefits.tsx";
import Classes from "./components/Classes/Classes.tsx";
import Pricing from "./components/Pricing/Pricing.tsx";

function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <About></About>
        <Programs></Programs>
        <Benefits></Benefits>
        <Team></Team>
        <Classes></Classes>
        <Pricing
          selectedPlanId={selectedPlanId}
          setSelectedPlanId={setSelectedPlanId}
        ></Pricing>
        <Contacts
          selectedPlanId={selectedPlanId}
          setSelectedPlanId={setSelectedPlanId}
        ></Contacts>
      </main>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
