import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ImagemTeste from "../../assets/imagemteste.png";
import { Slide } from "./Slide";
import { Botao } from "./Botao";

export function Projetos() {
  return (
    <div className="bg-black p-8 lg:p-24 space-y-16">
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
          <Slide projeto={"Projeto 1"} imagem={ImagemTeste} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide projeto={"Projeto 2"} imagem={ImagemTeste} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide projeto={"Projeto 3"} imagem={ImagemTeste} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide projeto={"Projeto 4"} imagem={ImagemTeste} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide projeto={"Projeto 5"} imagem={ImagemTeste} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide projeto={"Projeto 6"} imagem={ImagemTeste} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide projeto={"Projeto 7"} imagem={ImagemTeste} />
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center">
        <Botao text={"Abrir Gihthub"} />
      </div>
    </div>
  );
}
