import { Banner } from "./components/Banner";
import { CardSobreMim } from "./components/CardSobreMim";
import { Conhecimentos } from "./components/Conhecimentos";
import { FaixaEXP } from "./components/FaixaEXP";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Index";
import { Networking } from "./components/Networking";
import { Projetos } from "./components/Projetos";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 300,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
  return(
    <div>
      <Header />
      <Banner />
      <FaixaEXP />
      <CardSobreMim />
      <Projetos />
      <Conhecimentos />
      <Networking />
      <Footer />
    </div>
  )
}

export default App;
