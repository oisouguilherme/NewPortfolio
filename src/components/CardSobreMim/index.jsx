import perfil from '../../assets/perfil.png'

export function CardSobreMim(){
  return(
    <div className="flex justify-center bg-black bg-opacity-95 px-0 md:px-8 lg:px-24 py-24">
      <div className="bg-black bg-opacity-5 w-3/4 flex flex-col items-center text-center lg:flex-row lg:text-start border border-gray-500">
        <div className="w-1/2 pt-12 flex flex-col items-center lg:items-start">
          <a 
          href="#" 
          className="bg-purple-800 shadow-sm shadow-gray-100 text-white font-medium px-6 py-1 rounded w-36 hover:bg-purple-700 lg:ml-6 ">Clique Aqui</a>
          <img 
          className='rounded-full w-96 lg:w-3/4 mx-auto mt-20 lg:my-12'
          src={perfil} 
          alt="minha foto de perfil" />
        </div>
        <div className="w-3/4 space-y-3 py-12 px-8 ">
          <h2 className="text-purple-800 font-medium text-3xl">Quem Sou</h2>
          
          <h3 className="text-4xl text-white">Guilherme Henrique</h3>
        
          <p className="text-white text-lg">Frontend Developer & Tester de Software</p>
          
          <p className="text-white text-lg pt-4 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nemo officiis voluptas doloremque eligendi. Officia repellat et vel similique saepe vero quod facere dolorem libero possimus ab adipisci, , sapiente pariatur, sapiente pariatur, sapiente pariatursapiente pariatur.</p>

          <div className='pt-6 flex gap-6 flex-wrap'>
            <a 
            href="#"
            className='bg-purple-800 hover:bg-purple-700 text-center shadow-sm shadow-gray-100 px-8 py-2 rounded font-medium text-white w-full'
            >Baixar CV</a>
            <a 
            href="#"
            className='bg-purple-800 hover:bg-purple-700 text-center shadow-sm shadow-gray-100 px-8 py-2 rounded font-medium text-white w-full'
            >Copiar e-mail</a>
          </div>
        </div>
      </div>
    </div>
  )
}