import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "../../../components";
import Slider from "react-slick";
import { useEffect, useRef } from "react";
import { features } from "../../../common/definitions/constants";
import { motion } from "framer-motion";

export const HowItWorks = () => {

  const cardRefs = useRef<HTMLDivElement[]>([]);
  const slider = useRef<Slider | null>(null);

  useEffect(() => {
    const adjustCardHeights = () => {
      if (cardRefs.current.length === 0) return;

      const maxHeight = Math.max(
        ...cardRefs.current.map((card) => card.offsetHeight)
      );

      cardRefs.current.forEach((card) => {
        card.style.height = `${maxHeight}px`;
      });
    };

    adjustCardHeights();
    window.addEventListener("resize", adjustCardHeights);

    return () => {
      window.removeEventListener("resize", adjustCardHeights);
    };
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: window.innerWidth > 1280 ? 4 : window.innerWidth > 768 ? 3 : 1,
    slidesToScroll: 1,
  };


  return (
    <section
      id="howItWorks"
      className="container text-center px-10 py-16"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold "
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >

        Herramientas que {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Impulsan tus Ventas
        </span>
      </motion.h2>
      <motion.p className="md:w-3/4 mx-auto mt-4 mb-8 text-lg text-gray-500"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}>
        Simplifica la gestión de tu negocio de comidas y maximiza tus resultados.
      </motion.p>
      <motion.div className="relative"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Slider  {...settings} ref={slider} className="px-4">
          {features.map((item, index) => (
            <div
              key={item.title}
              className="gap-8"
              ref={(el: any) => (cardRefs.current[index] = el!)}>
              <Card
                className="shadow-lg m-4 w-5/6 max-w-lg mx-auto text-center border border-gray-200 bg-gray-100"
              >
                <div className="flex min-h-32 justify-center items-center w-full h-1/3 bg-gradient-to-r from-[#F596D3]  to-[#D247BF]">
                  {item.icon}
                </div>
                <Card.Body>
                  <div className="justify-center flex items-center w-full h-full mb-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  <p className="font-light text-left w-full text-sm text-black">{item.description}</p>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
        <button
          className="absolute top-1/2 -left-1.5 -translate-y-1/1 transform cursor-pointer rounded-full bg-black/50 p-0.5 pr-1 text-white hover:bg-black/75"
          onClick={() => {
            slider.current?.slickPrev();
          }}
        >
          <ChevronLeft />
        </button>
        <button
          className="absolute top-1/2 -right-1.5 -translate-y-1/1 transform cursor-pointer rounded-full bg-black/50 p-0.5 pl-1 text-white hover:bg-black/75"
          onClick={() => {
            slider.current?.slickNext();
          }}
        >
          <ChevronRight />
        </button>
      </motion.div>
    </section>
  );
};
