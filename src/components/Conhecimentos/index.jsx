import { CardConhecimento } from "./CardConhecimento";
import Html from "../../assets/tec/html.svg";
import Css from "../../assets/tec/css.svg";
import React from "../../assets/tec/react.svg";
import Javascript from "../../assets/tec/javascript.svg";
import Next from "../../assets/tec/next.svg";
import Sass from "../../assets/tec/sass.svg";
import Tailwindcss from "../../assets/tec/tailwindcss.svg";
import Typescript from "../../assets/tec/typescript.svg";
import StyledComponents from "../../assets/tec/styled-components.svg";
import { Botao } from "../Projetos/Botao";

export function Conhecimentos() {
  return (
    <div className=" py-8 px-8 lg:px-24 bg-black bg-opacity-95 flex flex-col items-center justify-around space-y-10">
      <div className=" flex flex-col xl:flex-row items-center justify-around space-y-5 gap-4">
        <div className="text-center py-10">
          <h2 className="text-white font-bold text-4xl pb-12">Hard Skills</h2>
          <div className="flex flex-col space-y-1 md:space-x-4 md:flex-row md:space-y-0">
            <div className="space-y-2">
              <CardConhecimento image={Html} text={"HTML"} />
              <CardConhecimento image={Css} text={"Css"} />
              <CardConhecimento image={React} text={"React"} />
              <CardConhecimento image={Javascript} text={"Javascript"} />
            </div>
            <div className="space-y-2">
              <CardConhecimento image={Tailwindcss} text={"Tailwindcss"} />
              <CardConhecimento
                image={StyledComponents}
                text={"StyledComponents"}
              />
              <CardConhecimento image={Sass} text={"Sass"} />
              <CardConhecimento image={Typescript} text={"Typescript"} />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-white font-bold text-4xl pb-12 -mt-5">Soft Skills</h2>
          <div className="flex flex-col space-y-1 md:space-x-4 md:flex-row md:space-y-0">
            <div className="space-y-2">
              <CardConhecimento image={Html} text={"Organização"} />
              <CardConhecimento image={Css} text={"Trabalho em equipe"} />
              <CardConhecimento image={React} text={"Liderança"} />
              <CardConhecimento image={React} text={"Pensamento Crítico"} />
            </div>
            <div className="space-y-2">
              <CardConhecimento image={Html} text={"Proatividade"} />
              <CardConhecimento image={Css} text={"Comunicação"} />
              <CardConhecimento image={React} text={"Flexibilidade"} />
              <CardConhecimento image={React} text={"Melhoria continua"} />
            </div>
          </div>
        </div>
      </div>
      <Botao text={"Acesse meus Certificados"}/>
    </div>
  );
}
