import bgHero from '../../../assets/img/bg-hero.jpg';
import { ImageAnimated } from '../../../components/imageAnimated/ImageAnimated';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

export const Hero = () => {
    return (
        <section
            id="hero"
            className={`flex w-screen justify-center overflow-hidden bg-cover bg-bottom bg-no-repeat px-10 pb-10`}
            style={{ backgroundImage: `url(${bgHero})` }}
        >
            <div className="flex h-screen max-h-[50rem] max-w-[80rem] items-center justify-center gap-10 2xl:h-[75vh]">
                <motion.div
                    className="flex min-h-full max-w-xl flex-col items-center justify-center px-4 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h1
                        className={
                            '!font-base !mb-5 !text-3xl leading-normal font-bold text-white sm:!text-4xl md:text-3xl md:leading-normal lg:!text-[54px]'
                        }
                    >
                        <span className="me-4 inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-transparent">
                            Simplebar
                        </span>
                        te facilita el manejo de tu{' '}
                        <h2 className="inline">
                            <span
                                className="mb-4 inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text font-semibold text-transparent"
                                aria-live="polite"
                                role="status"
                            >
                                <ReactTyped
                                    strings={[
                                        'Negocio',
                                        'Bar',
                                        'Restaurante',
                                        'Local',
                                    ]}
                                    backSpeed={35}
                                    typeSpeed={50}
                                    startDelay={500}
                                    contentType="text"
                                    shuffle={false}
                                    backDelay={1000}
                                    loop
                                    smartBackspace
                                    cursorChar={'|'}
                                />
                            </span>
                        </h2>
                    </h1>
                    <p className="mx-auto max-w-xl !text-lg text-slate-500 dark:text-white/60">
                        Encargate sólo de llevar tu local gastronómico, nosotros
                        nos encargamos del resto.
                    </p>
                    <form
                        role="form"
                        aria-label="Formulario de suscripción"
                        className="relative my-5 w-full max-w-sm rounded-full bg-[#0f172A]"
                    >
                        <label htmlFor="email" className="sr-only">
                            Ingresá tu email
                        </label>
                        <input
                            id="email"
                            className="form-input h-12 w-full rounded-full border-none bg-slate-50 pr-12 pl-4 focus:ring-0 focus:outline-none"
                            type="email"
                            placeholder="Ingresá tu email"
                            name="email"
                            required
                            aria-required="true"
                        />
                        <button
                            type="submit"
                            className="absolute top-1/2 right-0 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#ef4444] text-primary"
                            aria-label="Enviar formulario"
                            title="Enviar formulario"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--akar-icons fs-3 -translate-x-[1px] text-white"
                                focusable="false"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m9.474 16l9.181 3.284a1.1 1.1 0 0 0 1.462-.887L21.99 4.239c.114-.862-.779-1.505-1.567-1.13L2.624 11.605c-.88.42-.814 1.69.106 2.017l2.44.868l1.33.467M13 17.26l-1.99 3.326c-.65.808-1.959.351-1.959-.683V17.24a2 2 0 0 1 .53-1.356l3.871-4.2"
                                ></path>
                            </svg>
                        </button>
                    </form>
                    <p className="text-base text-slate-300">
                        ¿Necesitás ayuda? Contactános
                    </p>
                </motion.div>
                <motion.div
                    className="hidden w-full max-w-[80rem] lg:block lg:max-w-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                    <ImageAnimated
                        src="src/assets/img/hero-charts.png"
                        alt="Hero charts"
                    />
                </motion.div>
            </div>
        </section>
    );
};
