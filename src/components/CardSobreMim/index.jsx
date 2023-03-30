import perfil from '../../assets/perfil.png'

export function CardSobreMim(){
  return(
    <div className="container mx-auto h-fit flex justify-center bg-black px-24 pb-24">
      <div className="bg-white bg-opacity-5 w-3/4 flex border border-gray-500">
        <div className="w-1/2 flex flex-col mt-12 px-8 relative">
          <a 
          href="#" 
          className="bg-purple-800 shadow-sm shadow-gray-100 text-white font-medium px-6 py-1 rounded max-w-fit hover:bg-purple-700 absolute">Clique Aqui</a>
          <img 
          className='rounded-full w-3/4 mx-auto my-20'
          src={perfil} 
          alt="minha foto de perfil" />
        </div>
        <div className="w-3/4 space-y-3 py-12 px-8 ">
          <h2 className="text-purple-800 font-medium text-3xl">Quem Sou</h2>
          
          <h3 className="text-4xl text-white">Guilherme Henrique</h3>
        
          <p className="text-white text-lg">Frontend Developer & Tester de Software</p>
          
          <p className="text-white text-lg pt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nemo officiis voluptas doloremque eligendi. Officia repellat et vel similique saepe vero quod facere dolorem libero possimus ab adipisci, , sapiente pariatur, sapiente pariatur, sapiente pariatursapiente pariatur.</p>

          <div className='space-x-4 pt-6'>
            <a 
            href="#"
            className='bg-purple-800 hover:bg-purple-700 shadow-sm shadow-gray-100 px-8 py-2 rounded font-medium text-white'
            >Baixar CV</a>
            <a 
            href="#"
            className='bg-purple-800 hover:bg-purple-700 shadow-sm shadow-gray-100 px-8 py-2 rounded font-medium text-white'
            >Copiar e-mail</a>
          </div>
        </div>
      </div>
    </div>
  )
}