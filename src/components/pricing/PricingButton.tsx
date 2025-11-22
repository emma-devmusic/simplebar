interface PricingButtonProps {
  href: string;
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const PricingButton = ({ 
  href, 
  variant = 'outline', 
  children, 
  className = '' 
}: PricingButtonProps) => {
  const baseClasses = "mt-6 inline-block text-center px-4 py-2 rounded-md transition-all duration-200";
  
  const variantClasses = {
    primary: "bg-primary text-white dark:text-neutral-900 font-medium hover:brightness-110 shadow-sm hover:shadow-md",
    outline: "border border-neutral-300 dark:border-neutral-700 hover:border-primary dark:hover:border-neutral-500 text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
};

export default PricingButton;