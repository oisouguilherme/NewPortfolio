import { Link } from "react-scroll";
import { RedeSocial } from "./RedeSocial";

export function Banner(){
  return(
    <section id="Banner"
    className="bg-black h-auto flex flex-col items-center justify-center space-y-14 py-24 lg:px-24">
      
      <p className="bg-white bg-opacity-10 text-white font-medium px-3 py-1 rounded">{"<h1> Hello World </h1>"}</p>
      
      <h1 className="text-5xl text-center font-light text-white">Olá, eu sou <span className="text-purple-800">Guilherme</span> <br/> <strong className="font-bold">Desenvolvedor Front-end</strong></h1>
      
      <p className="text-white w-1/2 text-center">
        Fico feliz em vê-lo (a) por aqui. Espero que aproveite o conteúdo e que eu possa te ajudar de alguma forma.
      </p>
      
      <Link 
      smooth={true}
      duration={500}
      to={"CardSobreMim"}
      className="text-white text-md bg-purple-800 px-24 py-2 rounded font-medium hover:bg-purple-700 hover:scale-110 duration-200 cursor-pointer">Conhecer mais</Link>

      <RedeSocial />
    </section>
  )
}