import logo from '../../assets/logo.png'
import { ItemNav } from './ItemNav'

export function Header (){
  return(
    <section id='Header' className='sm:px-12 lg:px-24 py-4 flex justify-center sm:justify-between items-center bg-black'>
      <img src={logo} alt="logo" className='h-full' />
      <ul className='sm:flex space-x-8 hidden'>
        <ItemNav text={"Ínicio"} nav={""} />
        <ItemNav text={"Sobre"} nav={"CardSobreMim"}/>
        <ItemNav text={"Projetos"} nav={"Projetos"}/>
        <ItemNav text={"Qualificações"} nav={"Conhecimentos"}/>
        <ItemNav text={"Experiencia"} nav={"Experiencia"}/>
      </ul>

    </section>
  )
}