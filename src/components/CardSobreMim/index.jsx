import perfil from '../../assets/perfil.png'

export function CardSobreMim(){
  return(
    <section 
    title="CardSobreMim" 
    id='CardSobreMim' 
    className="flex justify-center bg-black bg-opacity-95 px-0 md:px-8 lg:px-24 py-24">
      <div className="bg-black bg-opacity-5 md:w-3/4 flex flex-col items-center text-center lg:flex-row lg:text-start md:border border-gray-500">
        <div className="w-1/2 flex flex-col items-center lg:items-start">
          <img 
          className='rounded-full w-96 lg:w-3/4 mx-auto mt-20 lg:my-12'
          src={perfil} 
          alt="minha foto de perfil" />
        </div>
        <div className="w-3/4 space-y-3 py-12 md:px-8">
          <h2 className="text-purple-800 font-medium text-3xl">Quem Sou</h2>
          
          <h3 className="text-4xl text-white">Guilherme Henrique</h3>
        
          <p className="text-white text-lg">Frontend Developer & Tester de Software</p>
          
          <p className="text-white text-lg pt-4 text-">Com habilidades técnicas em React, NextJS, HTML, CSS, TailwindCSS, JavaScript, Git e Github, sou um desenvolvedor front-end apaixonado por criar interfaces de usuário interativas e atraentes. Eu adoro desafios e estou sempre procurando aprender coisas novas. Além disso, tenho excelentes habilidades interpessoais, trabalho bem em equipe e sou um bom comunicador. Sou apaixonado por aprender e estou sempre procurando me atualizar nas últimas tendências e tecnologias.</p>

          <div className='pt-6 flex gap-6 flex-wrap'>
            <a 
            href="https://drive.google.com/file/d/1iki_e0akbGzjgvMUhdoZkQNGuzy4UvDe/view?usp=sharing" target='_blank'
            className='bg-purple-800 hover:bg-purple-700 text-center shadow-sm shadow-gray-100 px-8 py-2 rounded font-medium text-white w-full duration-200'
            >Baixar CV</a>
            <a 
            href="mailto:gh.dourado77@gmail.com"
            className='bg-purple-800 hover:bg-purple-700 text-center shadow-sm shadow-gray-100 px-8 py-2 rounded font-medium text-white w-full duration-200'
            >Copiar e-mail</a>
          </div>
        </div>
      </div>
    </section>
  )
}