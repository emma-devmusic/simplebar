import { Check, Circle } from 'lucide-react';
import { Card } from '../../../components';
import {
    pricingList,
    PricingProps,
} from '../../../common/definitions/constants';
import { motion } from 'framer-motion';

export const Pricing = () => {
    return (
        <section id="pricing" className="container px-10 py-16">
            <motion.h2
                className="text-center text-3xl font-bold md:text-4xl"
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
            >
                Paquete de
                <span className="bg-gradient-to-b bg-clip-text text-secondary">
                    {' '}
                    Promociones
                </span>
            </motion.h2>
            <motion.p
                className="text-muted-foreground pt-4 pb-8 text-left text-xl text-gray-600 sm:text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
            >
                Descubre nuestras opciones de precios flexibles diseñadas para
                adaptarse a tus necesidades, desde planes básicos accesibles
                hasta paquetes premium con servicios avanzados y personalizados.
            </motion.p>
            <div className="flex flex-wrap justify-between gap-8">
                {pricingList.map((pricing: PricingProps) => (
                    <Card
                        key={pricing.title}
                        className={
                            'group w-full border !border-gray-300 transition-all duration-500 hover:-translate-y-4 hover:!border-primary hover:shadow-xl md:w-[45%] lg:w-[30%]'
                        }
                    >
                        <Card.Header className="flex flex-col items-center gap-3 border-b-0 text-gray-600">
                            <p className="item-center flex justify-center text-xl leading-none font-semibold tracking-tight group-hover:text-secondary">
                                {pricing.title}
                            </p>
                            <span className="text-5xl font-bold group-hover:text-green-600">
                                ${pricing.price}
                            </span>
                            <span className="font-normal">mensuales</span>
                        </Card.Header>

                        <p className="text-center text-sm">
                            {typeof pricing.releasePrice === 'number'
                                ? `Lanzamiento: $${pricing.releasePrice}`
                                : pricing.releasePrice}
                        </p>
                        <hr className="m-auto mt-1.5 mb-4 w-4/5 text-gray-400" />

                        <Card.Footer className="flex items-center bg-transparent pt-0">
                            <div className="space-y-3">
                                {pricing.includedFeatures.map(
                                    (benefit: string) => (
                                        <span key={benefit} className="flex">
                                            <Check className="my-auto w-6 min-w-6 text-primary" />{' '}
                                            <h3 className="ml-2">{benefit}</h3>
                                        </span>
                                    )
                                )}
                                {pricing.notIncludedFeatures.map(
                                    (benefit: string) => (
                                        <span key={benefit} className="flex">
                                            <Circle className="my-auto w-6 min-w-6 text-red-500" />{' '}
                                            <h3 className="ml-2">{benefit}</h3>
                                        </span>
                                    )
                                )}
                            </div>
                        </Card.Footer>
                    </Card>
                ))}
            </div>
        </section>
    );
};
