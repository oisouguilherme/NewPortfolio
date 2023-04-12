import { Banner } from "./components/Banner";
import { CardSobreMim } from "./components/CardSobreMim";
import { Conhecimentos } from "./components/Conhecimentos";
import { Experiencia } from "./components/Experiencia";
import { FaixaEXP } from "./components/FaixaEXP";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Index";
import { Networking } from "./components/Networking";
import { Projetos } from "./components/Projetos";

function App() {
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
