import Perfil from "../../assets/perfil.png";
export function CardSobreMim() {
  const email = 'gh.dourado77@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <section
      id="CardSobreMim"
      className="bg-black bg-opacity-95 text-white pt-20"
    >
      <div className="max-w-6xl mx-auto px-4" data-aos="fade-up">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold border-l-4 border-purple-700 pl-4">
              Sobre Guilherme Henrique
            </h2>
            <p className="text-lg py-8 text-violet-700 font-medium">
              Desenvolvedor Web | Frontend
            </p>

            <p>
              Sou um desenvolvedor web apaixonado e atualmente estou cursando Ciência da Computação. Com expertise em Next.js, React e Tailwind CSS, estou pronto para criar soluções incríveis para seus projetos.
            </p>
            <p className="py-4">
              Além disso, estou sempre atualizado com as últimas tendências da indústria e pronto para aprender novas tecnologias. Minha paixão pelo desenvolvimento web e minha sede de conhecimento me impulsionam a oferecer o melhor resultado possível.
            </p>
            <p>
              Se você está em busca de um desenvolvedor web comprometido, criativo e orientado a resultados, estou pronto para colaborar com você e sua equipe. Vamos impulsionar seu projeto para o sucesso!
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={Perfil}
              alt="Guilherme Henrique"
              className="w-64 h-64 rounded-full"
            />
          </div>
        </div>

        <div className="py-20 flex gap-8 flex-wrap justify-center md:justify-between">
          <div className="flex flex-wrap justify-center gap-8">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1d7I_jKeJjHgJOO-YsKT73zCAeniBCuqR/view?usp=sharing"
              className="border-2 hover:border-violet-700 hover:text-violet-700 duration-300 px-12 py-3 font-medium flex items-center uppercase"
            >
              CV
            </a>
            <a
              target="_blank"
              href="#"
              className="border-2 hover:border-violet-700 hover:text-violet-700 px-12 py-3 font-medium flex items-center uppercase"
            >
              em andamento
            </a>
          </div>
          <div className="flex  flex-wrap justify-center gap-8 text-sm">
            <a
              target="_blank"
              href="https://wa.me/5538998542256"
              className="flex flex-col gap-1 rounded-lg items-center bg-white bg-opacity-10 p-4 border-2 hover:border-violet-700 duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#6d28d9"
                class="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              <p>(38) 99854-2256</p>
            </a>
            <button
              onClick={handleCopyEmail}
              className="flex flex-col gap-1 rounded-lg items-center bg-white bg-opacity-10 p-4 border-2 hover:border-violet-700 duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#6d28d9"
                class="bi bi-envelope-at-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
              </svg>
              <p>gh.dourado77@gmail.com</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
