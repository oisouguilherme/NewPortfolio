import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Slide } from "./Slide";
import { Botao } from "./Botao";

import projeto1 from "../../assets/projetos/1.png";
import projeto2 from "../../assets/projetos/2.png";
import projeto3 from "../../assets/projetos/3.png";
import projeto4 from "../../assets/projetos/4.png";
import projeto8 from "../../assets/projetos/projeto8.png";
import projeto9 from "../../assets/projetos/projeto9.png";
import projeto10 from "../../assets/projetos/projeto10.png";
import projeto11 from "../../assets/projetos/projeto11.png";

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
          <Slide
            linkGithub={
              "https://github.com/oisouguilherme/GOD-OF-WAR-Ladind-Page"
            }
            linkSite={"https://god-of-war-e784d9.netlify.app/"}
            imagem={projeto1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            linkGithub={"https://github.com/oisouguilherme/ConsultoriaUlisses"}
            linkSite={"https://ulissesalmeida.com.br/"}
            imagem={projeto2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            linkGithub={"https://github.com/oisouguilherme/PaginaHotelTailwind"}
            linkSite={"https://home-hotel-04decf.netlify.app/"}
            imagem={projeto3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            linkGithub={"https://github.com/oisouguilherme/Freelancer-projeto1"}
            linkSite={"https://curso-dobre-suas-vendas.ulissesalmeida.com.br/"}
            imagem={projeto4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            linkGithub={"https://github.com/oisouguilherme/RafaelPrudentePage"}
            linkSite={"https://boisterous-sable-6b290d.netlify.app/"}
            imagem={projeto8}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            linkGithub={"https://github.com/oisouguilherme/CofenPisoSalarial"}
            linkSite={"https://cofen-piso-salarial-page.vercel.app/"}
            imagem={projeto9}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            linkGithub={"https://github.com/oisouguilherme/PageCorretoraZunic"}
            linkSite={"https://page-corretora-zunic.vercel.app/"}
            imagem={projeto10}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            linkGithub={"https://github.com/oisouguilherme/sertaoConsultoria"}
            linkSite={"https://inspiring-rolypoly-6d7c18.netlify.app/"}
            imagem={projeto11}
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center">
        <Botao
          text={"Abrir Gihthub"}
          link={"https://github.com/oisouguilherme?tab=repositories"}
        />
      </div>
    </section>
  );
}
