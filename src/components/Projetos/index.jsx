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

export function Projetos() {
  return (
    <section id="Projetos" className="bg-black p-8 lg:p-24 space-y-16">
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
        />
        <CardProjeto
          title={"Clinica Medica:"}
          client={"Clinica Buritis"}
          image={Page2}
          tec1={"Next JS"}
          tec2={"React-Scroll"}
        />
        <CardProjeto
          title={"Contabilidade:"}
          client={"Contabilidade Inova"}
          image={Page3}
          tec1={"Next JS"}
          tec2={"TailwindCSS"}
        />
        <CardProjeto
          title={"E-Comerce IPhone:"}
          client={"GoiStore - Italo Gois"}
          image={Page4}
          tec1={"Next JS"}
          tec2={"E-Comerce"}
        />
        <CardProjeto
          title={"Corretora de Seguros:"}
          client={"Zunic - Corretora de Seguros"}
          image={Page5}
          tec1={"Pagina Instiucional"}
          tec2={"AOS"}
        />
        <CardProjeto
          title={"Mentoria Instagram:"}
          client={"Venda Qualquer coisa"}
          image={Page6}
          tec1={"React JS"}
          tec2={"TailwindCSS"}
        />
        <CardProjeto
          title={"Curso de Vendas:"}
          client={"Venda Qualquer coisa"}
          image={Page7}
          tec1={"React JS"}
          tec2={"HTML / CSS"}
        />
        <CardProjeto
          title={"Rafael Prudente Institucional:"}
          client={"Rafael Prudente - Governador"}
          image={Page8}
          tec1={"Next JS"}
          tec2={"TailwindCSS"}
        />
        <CardProjeto
          title={"Cofen Infermagem:"}
          client={"Conselho federal de Infermagem"}
          image={Page9}
          tec1={"Next JS"}
          tec2={"TailwindCSS"}
        />
      </div>
    </section>
  );
}
