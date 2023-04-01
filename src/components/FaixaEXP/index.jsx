import { Exp } from "./EXP";

export function FaixaEXP(){
  return(
    <div className="bg-black space-y-12 md:space-y-0 flex flex-col md:flex-row items-center justify-center md:space-x-12 px-36 text-center md:px-24 pb-16">
      <Exp 
        time="01" 
        text="Ano de experiência como desenvolvedor"
      />
      <Exp 
        time="31" 
        text="Projetos pessoais e educativos concluídos"
      />
      <Exp 
        time="01" 
        text="Projeto freelancer entregue"
      />
      <Exp 
        time="12" 
        text="Cursos front-end concluídos"
      />
    </div>
  )
}