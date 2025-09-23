import { ImageAnimated } from "../../../components/imageAnimated/ImageAnimated";
import { motion } from "framer-motion"

export const Services = () => {

  return (
    <section id="services" className="w-screen min-h-72 flex justify-center bg-[url('src/assets/img/bg-newsletter.png'),url('../img/bg-bottom.png'),linear-gradient(149deg,rgba(119,82,235,1)_0%,rgba(14,111,255,1)_150%)] bg-no-repeat bg-cover bg-[left_top,right_bottom]">
      <div className="container p-10 text-white w-full flex items-center h-full flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 ">
          <motion.h2 className="text-center md:text-left text-3xl md:text-4xl font-bold"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}>
            Lleva el {" "}
            <strong className="bg-gradient-to-br bg-clip-text">
              Control
            </strong><br />
            donde quieras
          </motion.h2>

          <motion.p className="text-muted-foreground text-lg mt-4 mb-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}>
            Gestiona y conecta tu negocio gastronómico desde cualquier lugar. Accede a tus herramientas clave, mantén el contacto con tus clientes y administra todo de manera eficiente, sin importar dónde te encuentres.
          </motion.p>
        </div>
        <motion.div className="w-full flex justify-center items-center lg:w-[40%] lg:relative top-8 -mb-28 lg:-mb-0"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}>
          <ImageAnimated
            src={"src/assets/img/laptop-backoffice.png"}
            alt="About services"
            className="lg:absolute right-auto left-auto w-2/3"
          />
          <ImageAnimated
            src={"src/assets/img/smarphone.png"}
            alt="About services"
            className="lg:absolute right-0 left-auto w-1/5 -translate-y-1/4 -translate-x-1/2"
          />
        </motion.div>

      </div>
    </section>
  );
};
