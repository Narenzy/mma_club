import { useState } from 'react';

import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import Hero from './components/Hero/Hero.tsx';
import Contacts from './components/Contacts/Contacts.tsx';
import Programs from './components/Programs/Programs.tsx';
import About from './components/About/About.tsx';
import Team from './components/Team/Team.tsx';
import Benefits from './components/Benefits/Benefits.tsx';
import Classes from './components/Classes/Classes.tsx';
import Pricing from './components/Pricing/Pricing.tsx';
import FreeTrial from './components/FreeTrial/FreeTrial.tsx';
import type { ContactPlanId, ContactRequestType } from './types/contact.ts';
import { Toaster } from 'sonner';

function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<ContactPlanId>(null);
  const [requestType, setRequestType] = useState<ContactRequestType>('contact');

  return (
    <>
      <Toaster position="top-center" />
      <Header></Header>
      <main>
        <Hero
          setSelectedPlanId={setSelectedPlanId}
          setRequestType={setRequestType}
        ></Hero>
        <About></About>
        <Programs></Programs>
        <Benefits></Benefits>
        <Team></Team>
        <Classes></Classes>
        <Pricing
          selectedPlanId={selectedPlanId}
          setSelectedPlanId={setSelectedPlanId}
          setRequestType={setRequestType}
        ></Pricing>
        <FreeTrial
          setSelectedPlanId={setSelectedPlanId}
          setRequestType={setRequestType}
        ></FreeTrial>
        <Contacts
          selectedPlanId={selectedPlanId}
          setSelectedPlanId={setSelectedPlanId}
          requestType={requestType}
          setRequestType={setRequestType}
        ></Contacts>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
