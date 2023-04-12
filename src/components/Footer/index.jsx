import { Link } from "react-scroll";

export function Footer(){
  return (
    <div className="bg-black pt-24 text-white text-center flex flex-col items-center space-y-6">
      <Link
        className="font-black text-lg text-purple-800 cursor-pointer flex items-center gap-5 border border-purple-800 hover:border-purple-300 px-6 py-2 hover:text-purple-700 hover:scale-110 w-fit"
        to="Header"
        smooth={true}
        duration={500}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          class="bi bi-arrow-bar-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
          />
        </svg>{" "}
        Voltar para cima
      </Link>
      <p className="py-4">Guilherme Henrique © 2023</p>
    </div>
  );
}