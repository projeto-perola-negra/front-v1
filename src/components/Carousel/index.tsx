import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Slide1 from "../../assets/paint-of-hands.jpg";
import Slide2 from "../../assets/kids-in-a-circle.jpg";
import Slide3 from "../../assets/many-kids.jpg";

export default function Carousel() {
  const images = [
    {
      src: Slide1,
      alt:
        "Pintura com as mãos das crianças e acima o seguinte texto: " +
        '"Paz está em nossa mão"',
    },
    { src: Slide2, alt: "Varias crianças reunidas em um circulo" },
    { src: Slide3, alt: "Varias crianças" },
  ];

  return (
    <Swiper
      spaceBetween={16}
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        waitForTransition: true,
      }}
      navigation={{
        nextEl: null,
        prevEl: null,
      }}
      pagination={{
        clickable: true,
      }}
      loop
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img {...image} className="w-full rounded-2xl" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
