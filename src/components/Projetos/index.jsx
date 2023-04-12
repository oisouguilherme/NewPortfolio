import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ImagemTeste from "../../assets/imagemteste.png";
import { Slide } from "./Slide";
import { Botao } from "./Botao";

import projeto1 from '../../assets/projetos/1.png'
import projeto2 from '../../assets/projetos/2.png'
import projeto3 from '../../assets/projetos/3.png'
import projeto4 from '../../assets/projetos/4.png'
import projeto5 from '../../assets/projetos/5.png'
import projeto6 from '../../assets/projetos/6.png'
import projeto7 from '../../assets/projetos/7.png'

export function Projetos() {
  return (
    <section id="Projetos" className="bg-black p-8 lg:p-24 space-y-16">
      <h2 className="text-white font-bold text-4xl text-center">
        Meus Projetos
      </h2>
      <Swiper
        breakpoints={{
          620: {
            width: 620,
            slidesPerView: 2,
          },
        }}
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Slide linkGithub={"https://github.com/oisouguilherme/GOD-OF-WAR-Ladind-Page"} linkSite={"https://god-of-war-e784d9.netlify.app/"} imagem={projeto1} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide linkGithub={"https://github.com/oisouguilherme/ConsultoriaUlisses"} linkSite={"https://ulissesalmeida.com.br/"} imagem={projeto2} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide linkGithub={"https://github.com/oisouguilherme/PaginaHotelTailwind"} linkSite={"https://home-hotel-04decf.netlify.app/"} imagem={projeto3} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide linkGithub={"https://github.com/oisouguilherme/Freelancer-projeto1"} linkSite={"https://curso-dobre-suas-vendas.ulissesalmeida.com.br/"} imagem={projeto4} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide linkGithub={"https://github.com/oisouguilherme/Freelancer_projeto2"} linkSite={"https://dobre-suas-vendas-ebook.ulissesalmeida.com.br/"} imagem={projeto5} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide linkGithub={"https://github.com/oisouguilherme/Alura-Newsletter"} linkSite={"https://newsletter-alu.netlify.app/"} imagem={projeto6} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide linkGithub={"https://github.com/oisouguilherme/organoReactAlura"} linkSite={"https://organo-react-alura-azure.vercel.app/"} imagem={projeto7}/>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center">
        <Botao text={"Abrir Gihthub"} link={"https://github.com/oisouguilherme?tab=repositories"} />
      </div>
    </section>
  );
}
