import logo from '../../assets/logo.png'
import { ItemNav } from './ItemNav'

export function Header (){
  return (
    <section
      id="Header"
      className="py-8 bg-black"
    >
      <div className=' max-w-6xl mx-auto flex justify-center sm:justify-between items-center'>
        <div className='text-white flex items-center gap-2 font-bold text-xl'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            fill="#6d28d9"
            class="bi bi-code-slash"
            viewBox="0 0 16 16"
          >
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
          </svg>
          <p>DEV MILITÃO</p>
        </div>
        <ul className="sm:flex space-x-8 hidden">
          <ItemNav text={"Ínicio"} nav={""} />
          <ItemNav text={"Sobre Mim"} nav={"CardSobreMim"} />
          <ItemNav text={"Projetos"} nav={"Projetos"} />
          <ItemNav text={"Qualificações"} nav={"Conhecimentos"} />
        </ul>
      </div>
    </section>
  );
}