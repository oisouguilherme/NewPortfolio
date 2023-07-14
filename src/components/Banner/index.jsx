import { Link } from "react-scroll";
import { RedeSocial } from "./RedeSocial";

export function Banner() {
  return (
    <section
      id="Banner"
      className="bg-[url('/bg1.webp')] bg-cover"
    >
      <div className="bg-black bg-opacity-90 h-auto flex flex-col items-center justify-center space-y-14 py-20">
        <p className="bg-white bg-opacity-10 text-white font-medium px-3 py-1 rounded" data-aos="zoom-out">
          {"<h1> Hello World </h1>"}
        </p>

        <h1 className="text-4xl sm:text-5xl text-center font-light text-white" data-aos="zoom-out">
          Olá, eu sou <span className="text-violet-800 font-medium">Guilherme</span> <br />{" "}
          <strong className="font-bold">Desenvolvedor Front-end</strong>
        </h1>

        <p className="text-white sm:w-1/2 text-center">
          Fico feliz em vê-lo (a) por aqui. Espero que aproveite o conteúdo e
          que eu possa te ajudar de alguma forma.
        </p>

        <Link
          smooth={true}
          duration={500}
          to={"CardSobreMim"}
          className="text-white text-md bg-violet-800 px-24 py-2 rounded font-medium hover:bg-violet-700 hover:scale-105 duration-300 cursor-pointer"
        >
          Conhecer mais
        </Link>

        <RedeSocial />
      </div>
    </section>
  );
}
