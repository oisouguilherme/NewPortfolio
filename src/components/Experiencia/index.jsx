import { Selecao } from "./Selecao";

export function Experiencia(){
  return(
    <section id="Experiencia" className="bg-black py-16 px-8 lg:px-24 space-y-12">
      <h2 className="text-white text-4xl font-bold text-center">Experiências <span className="text-purple-800">.</span></h2>
      <div className="flex flex-col items-center space-y-8 lg:space-y-0 lg:items-start lg:flex-row lg:space-x-12">
        <Selecao />
        <div className="text-white space-y-4">
          <div className="flex flex-col lg:flex-row justify-between"> 
            <p className="text-xl font-medium">Professor conteudista em Frontend</p>
            <p className="text-lg">Nov 2021 - Nov 2022 (1 ano)</p>
          </div>

          <p className="text-lg font-bold text-purple-800">Digital House</p>

          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, repellat doloribus iusto quaerat sequi ipsam quam esse quasi veritatis velit ducimus rerum provident consectetur vero recusandae animi voluptates perspiciatis laudantium.</p>
        </div>
      </div>
    </section>
  )
}