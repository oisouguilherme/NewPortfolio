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

import capslock from '../../assets/softskills/capslock-fill.svg'
import chat from '../../assets/softskills/chat-left-quote.svg'
import check from '../../assets/softskills/check-square.svg'
import cup from '../../assets/softskills/cup-hot.svg'
import pcdisplay from '../../assets/softskills/pc-display.svg'
import peoplefill from '../../assets/softskills/people-fill.svg'
import peoplelines from '../../assets/softskills/person-lines-fill.svg'
import person from '../../assets/softskills/person-video3.svg'

import { Botao } from "../Projetos/Botao";

export function Conhecimentos() {
  return (
    <section id="Conhecimentos" className=" py-8 px-8 lg:px-24 bg-black bg-opacity-95 flex flex-col items-center justify-around space-y-10">
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
              <CardConhecimento image={person} text={"Organização"} />
              <CardConhecimento image={peoplefill} text={"Trabalho em equipe"} />
              <CardConhecimento image={peoplelines} text={"Liderança"} />
              <CardConhecimento image={cup} text={"Pensamento Crítico"} />
            </div>
            <div className="space-y-2">
              <CardConhecimento image={check} text={"Proatividade"} />
              <CardConhecimento image={ chat} text={"Comunicação"} />
              <CardConhecimento image={pcdisplay} text={"Flexibilidade"} />
              <CardConhecimento image={capslock} text={"Melhoria continua"} />
            </div>
          </div>
        </div>
      </div>
      <Botao text={"Acesse meus Certificados"} link={"https://drive.google.com/drive/u/0/folders/1vJjEqBD7whN2yQvaHZBLYP2ZcFw3oxkY"}/>
    </section>
  );
}
