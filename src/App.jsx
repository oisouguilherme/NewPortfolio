import { Banner } from "./components/Banner";
import { CardSobreMim } from "./components/CardSobreMim";
import { Conhecimentos } from "./components/Conhecimentos";
import { Experiencia } from "./components/Experiencia";
import { FaixaEXP } from "./components/FaixaEXP";
import { Header } from "./components/Header/Index";

function App() {
  return(
    <div>
      <Header />
      <Banner />
      <CardSobreMim />
      <FaixaEXP />
      <Experiencia />
      <Conhecimentos />
    </div>
  )
}

export default App;
