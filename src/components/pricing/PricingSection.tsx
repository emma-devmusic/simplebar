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
  title = "Planes y precios",
  subtitle = "Elegí el plan que mejor se adapte a tu operación. Sin costos ocultos.",
  plans,
  className = ""
}: PricingSectionProps) => {
  return (
    <section 
      id="precios" 
      className={`py-20 border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
            {title.split(' ').map((word, index) => 
              word === 'precios' ? (
                <span key={index} className="text-primary">{word}</span>
              ) : (
                `${word} `
              )
            )}
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">{subtitle}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
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
              className={plan.isRecommended ? "transform scale-105 z-10" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};