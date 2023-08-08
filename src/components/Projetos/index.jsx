import { CardProjeto } from "./CardProjeto";
import Page1 from '../../assets/projetos/page1.png'
import Page2 from '../../assets/projetos/page2.png'
import Page3 from '../../assets/projetos/page3.png'
import Page4 from '../../assets/projetos/page4.png'
import Page5 from '../../assets/projetos/page5.png'
import Page6 from '../../assets/projetos/page6.png'
import Page7 from '../../assets/projetos/page7.png'
import Page8 from '../../assets/projetos/page8.png'
import Page9 from '../../assets/projetos/page9.png'
import Page10 from '../../assets/projetos/page10.png'

import { Botao } from "./Botao";

export function Projetos() {
  return (
    <section id="Projetos" className="bg-black flex flex-col items-center px-4 py-20 space-y-16">
      <h2 className="text-white font-bold text-4xl text-center">
        Meus Projetos
      </h2>
      <div className="max-w-6xl mx-auto flex flex-wrap gap-12 justify-center">
        <CardProjeto
          title={"Consultoria Ambiental: "}
          client={"Edvaldo - Consultoria"}
          image={Page1}
          tec1={"Next JS"}
          tec2={"SPA"}
          link={"https://consultoria-ambiental-spa.vercel.app/"}
        />
        <CardProjeto
          title={"Clinica Medica:"}
          client={"Clinica Buritis"}
          image={Page2}
          tec1={"Next JS"}
          tec2={"React-Scroll"}
          link={"https://layout-clinica.vercel.app/"}
        />
        <CardProjeto
          title={"Contabilidade:"}
          client={"Contabilidade Inova"}
          image={Page3}
          tec1={"Next JS"}
          tec2={"TailwindCSS"}
          link={"https://contabilidade-inova.vercel.app/"}
        />
        <CardProjeto
          title={"E-Comerce IPhone:"}
          client={"GoiStore - Italo Gois"}
          image={Page4}
          tec1={"Next JS"}
          tec2={"E-Comerce"}
          link={"https://goi-store-e-comerce.vercel.app/"}
        />
        <CardProjeto
          title={"Corretora de Seguros:"}
          client={"Zunic - Corretora de Seguros"}
          image={Page5}
          tec1={"Pagina Instiucional"}
          tec2={"AOS"}
          link={"https://page-corretora-zunic.vercel.app/"}
        />
        <CardProjeto
          title={"Mentoria Instagram:"}
          client={"Venda Qualquer coisa"}
          image={Page6}
          tec1={"React JS"}
          tec2={"TailwindCSS"}
          link={"https://ulissesalmeida.com.br/"}
        />
        <CardProjeto
          title={"Curso de Vendas:"}
          client={"Venda Qualquer coisa"}
          image={Page7}
          tec1={"React JS"}
          tec2={"HTML / CSS"}
          link={"https://vqc-whatsapp.ulissesalmeida.com.br/"}
        />
        <CardProjeto
          title={"Rafael Prudente Institucional:"}
          client={"Rafael Prudente - Governador"}
          image={Page8}
          tec1={"Next JS"}
          tec2={"TailwindCSS"}
          link={"https://rafael-prudentet1.websiteseguro.com/"}
        />
        <CardProjeto
          title={"Cofen Infermagem:"}
          client={"Conselho federal de Infermagem"}
          image={Page9}
          tec1={"Next JS"}
          tec2={"TailwindCSS"}
          link={"http://piso.cofen.gov.br/"}
        />
        <CardProjeto
          title={"Programa Mulher"}
          client={"Confea/Confen"}
          image={Page10}
          tec1={"Next JS"}
          tec2={"LandingPages SPA"}
          link={"https://lp-programa-mulher.vercel.app/"}
        />
      </div>
      <Botao link={"https://github.com/oisouguilherme?tab=repositories"} text={"VER MAIS PROJETOS"}/>
    </section>
  );
}
