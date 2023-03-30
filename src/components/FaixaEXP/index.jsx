import { Exp } from "./EXP";

export function FaixaEXP(){
  return(
    <div className="bg-black bg-opacity-95 flex justify-center space-x-3 px-24 py-8">
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