import { Selecao } from "./Selecao";

export function Experiencia(){
  return(
    <div className="bg-black container mx-auto px-24 py-16 space-y-12">
      <h2 className="text-white text-4xl font-bold">Experiências <span className="text-purple-800">.</span></h2>
      <div className="flex space-x-12">
        <Selecao />
        <div className="text-white space-y-4">
          <div className="flex justify-between"> 
            <p className="text-xl font-medium">Professor conteudista em Frontend</p>
            <p className="text-lg">Nov 2021 - Nov 2022 (1 ano)</p>
          </div>

          <p className="text-lg font-bold text-purple-800">Digital House</p>

          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, repellat doloribus iusto quaerat sequi ipsam quam esse quasi veritatis velit ducimus rerum provident consectetur vero recusandae animi voluptates perspiciatis laudantium.</p>
        </div>
      </div>
    </div>
  )
}