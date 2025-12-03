import { PricingCard } from './PricingCard';

export interface PricingPlan {
    title: string;
    description: string;
    price: string | number;
    priceUnit?: string;
    features: string[];
    buttonText: string;
    buttonHref: string;
    isRecommended?: boolean;
    buttonVariant?: 'primary' | 'outline';
}

export interface PricingSectionProps {
    title?: string;
    subtitle?: string;
    plans: PricingPlan[];
    className?: string;
}

export const PricingSection = ({
    title = 'Planes y precios',
    subtitle = 'Elegí el plan que mejor se adapte a tu operación. Sin costos ocultos.',
    plans,
    className = '',
}: PricingSectionProps) => {
    return (
        <section
            id="precios"
            className={`border-t border-neutral-200 bg-white py-20 text-neutral-900 dark:border-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 ${className}`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
                        {title.split(' ').map((word, index) =>
                            word === 'precios' ? (
                                <span key={index} className="text-primary">
                                    {word}
                                </span>
                            ) : (
                                `${word} `
                            )
                        )}
                    </h2>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                        {subtitle}
                    </p>
                </div>
                <div className="mt-12 grid -translate-y-40 items-stretch gap-6 sm:translate-y-0 sm:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <PricingCard
                            key={index}
                            title={plan.title}
                            description={plan.description}
                            price={plan.price}
                            priceUnit={plan.priceUnit}
                            features={plan.features}
                            buttonText={plan.buttonText}
                            buttonHref={plan.buttonHref}
                            isRecommended={plan.isRecommended}
                            buttonVariant={plan.buttonVariant}
                            className={
                                plan.isRecommended
                                    ? 'relative z-10 scale-105 transform sm:-translate-x-20 lg:translate-0'
                                    : `pointer-events-none scale-95 opacity-50 blur-[6px] select-none ${index === 0 ? 'translate-y-50 sm:translate-x-0 sm:translate-y-0 lg:translate-x-20' : ''} ${index === plans.length - 1 ? '-translate-y-30 sm:translate-x-40 lg:-translate-x-20 lg:-translate-y-0' : ''}`
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
