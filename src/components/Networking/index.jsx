import {
  IconEmail,
  IconLinkedIn,
  IconLocation,
  IconWhatsApp,
} from "../../assets/Icons";

export function Networking() {
  return (
    <div className="bg-[url('/bg2.webp')] bg-cover text-white">
      <div className="bg-black bg-opacity-90 py-20 px-4">
        <h2 className="text-white font-black text-4xl border-l-4 pl-4 border-violet-800 max-w-6xl mx-auto mb-12">
          Contato
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white bg-opacity-5 p-8 md:w-1/2">
            <h3 className="text-2xl font-bold">Vamos Conversar!</h3>
            <p>
              Estou aqui para ouvir sobre o seu projeto e oferecer soluções personalizadas. <span className="font-medium text-violet-700">Vamos iniciar essa parceria de sucesso!</span> 
            </p>
            <div className="space-y-4 pt-12">
              <a target="_blank" href="https://wa.me/5538998542256" className="flex items-center gap-4">
                <IconWhatsApp />
                <p>(38) 99854-2256</p>
              </a>
              <div className="flex items-center gap-4">
                <IconEmail />
                <p>gh.dourado77@gmail.com</p>
              </div>
              <a target="_blank" href="https://www.linkedin.com/in/front-end-guilherme-henrique/" className="flex items-center gap-4">
                <IconLinkedIn />
                <p>Guilherme H</p>
              </a>
              <div className="flex items-center gap-4">
                <IconLocation />
                <p>Buritis-MG | Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
