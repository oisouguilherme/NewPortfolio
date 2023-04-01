import logo from '../../assets/logo.png'
import { ItemNav } from './ItemNav'

export function Header (){
  return(
    <header className='sm:px-12 lg:px-24 py-4 flex justify-center sm:justify-between items-center bg-black'>
      <img src={logo} alt="logo" className='h-full' />
      <ul className='sm:flex space-x-8 hidden'>
        <ItemNav text={"Ínicio"}/>
        <ItemNav text={"Sobre"}/>
        <ItemNav text={"Projetos"}/>
        <ItemNav text={"Qualificações"}/>
        <ItemNav text={"Experiencia"}/>
      </ul>

    </header>
  )
}