import { Exp } from "./EXP";


export function FaixaEXP() {
  return (
    <div className="bg-black py-20">
      <div className=" max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-12">
        <Exp plus={"+"} time="50" text="Projetos completos, entregues com sucesso e satisfação dos clientes." />
        <Exp plus={"+"} complement={"ano"} time="1" text="Mais de 1 ano de atuação no mercado como desenvolvedor freelancer." />
        <Exp time="100" complement={"%"} text="Priorizo a satisfação dos meus clientes em cada etapa do projeto." />
        <Exp plus={"+"} complement={"%"} time="90" text="Alta taxa de feedback positivo dos clientes." />
      </div>
    </div>
  );
}
