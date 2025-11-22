interface PriceDisplayProps {
  price: string | number;
  priceUnit?: string;
  className?: string;
  priceClassName?: string;
  unitClassName?: string;
}

export const PriceDisplay = ({
  price,
  priceUnit = '/mes',
  className = '',
  priceClassName = '',
  unitClassName = ''
}: PriceDisplayProps) => {
  const formatPrice = (price: string | number): string => {
    if (typeof price === 'number') {
      return `$${price.toLocaleString('es-AR')}`;
    }
    return price;
  };

  const shouldShowUnit = typeof price === 'number' && priceUnit;

  return (
    <div className={`text-3xl font-bold text-neutral-900 dark:text-neutral-100 ${className}`}>
      <span className={priceClassName}>{formatPrice(price)}</span>
      {shouldShowUnit && (
        <span className={`text-base font-medium ${unitClassName}`}>
          {priceUnit}
        </span>
      )}
    </div>
  );
};

export default PriceDisplay;