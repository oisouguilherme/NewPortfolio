import logo from '../../assets/logo.png'
import { ItemNav } from './ItemNav'

export function Header (){
  return(
    <header className='container mx-auto px-24 py-4 flex justify-between items-center bg-purple-950'>
      <img src={logo} alt="logo" className='h-full' />
      <ul className='flex space-x-8'>
        <ItemNav text={"Ínicio"}/>
        <ItemNav text={"Sobre"}/>
        <ItemNav text={"Qualificações"}/>
        <ItemNav text={"Projetos"}/>
        <ItemNav text={"Experiencia"}/>
      </ul>

    </header>
  )
}