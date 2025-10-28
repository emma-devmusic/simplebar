import { PricingButton } from './PricingButton';
import { RecommendedBadge } from './RecommendedBadge';
import { PriceDisplay } from './PriceDisplay';
import { FeatureList } from './FeatureList';

export interface PricingCardProps {
  title: string;
  description: string;
  price: string | number;
  priceUnit?: string;
  features: string[];
  buttonText: string;
  buttonHref: string;
  isRecommended?: boolean;
  buttonVariant?: 'primary' | 'outline';
  className?: string;
}

export const PricingCard = ({
  title,
  description,
  price,
  priceUnit = '/mes',
  features,
  buttonText,
  buttonHref,
  isRecommended = false,
  buttonVariant = 'outline',
  className = ''
}: PricingCardProps) => {
  const cardClasses = isRecommended
    ? "rounded-2xl border border-primary p-6 bg-primary/10 flex flex-col transition-all duration-200 hover:shadow-lg"
    : "rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900/60 backdrop-blur flex flex-col transition-all duration-200 hover:shadow-lg dark:hover:shadow-neutral-900/50";

  const textClasses = isRecommended
    ? "text-neutral-800 dark:text-neutral-200"
    : "text-neutral-600 dark:text-neutral-300";

  const priceClasses = isRecommended
    ? "text-base font-medium text-neutral-500 dark:text-neutral-300"
    : "text-base font-medium text-neutral-500 dark:text-neutral-400";

  return (
    <div className={`${cardClasses} ${className}`}>
      {isRecommended && <RecommendedBadge />}
      <h3 className={`${isRecommended ? 'mt-2' : ''} font-semibold text-neutral-900 dark:text-neutral-100`}>{title}</h3>
      <p className={`mt-2 text-sm ${textClasses}`}>{description}</p>
      <PriceDisplay
        price={price}
        priceUnit={priceUnit}
        className="mt-6"
        unitClassName={priceClasses}
      />
      <FeatureList
        features={features}
        className={`mt-6 ${textClasses} flex-grow`}
        showIcons={true}
        iconType="check"
      />
      <PricingButton href={buttonHref} variant={buttonVariant}>
        {buttonText}
      </PricingButton>
    </div>
  );
};