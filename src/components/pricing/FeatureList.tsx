interface FeatureListProps {
  features: string[];
  className?: string;
  itemClassName?: string;
  showIcons?: boolean;
  iconType?: 'check' | 'bullet' | 'arrow';
}

export const FeatureList = ({
  features,
  className = '',
  itemClassName = '',
  showIcons = false,
  iconType = 'bullet'
}: FeatureListProps) => {
  const renderIcon = (type: string) => {
    switch (type) {
      case 'check':
        return (
          <svg className="w-4 h-4 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        );
      case 'arrow':
        return (
          <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        );
      case 'bullet':
      default:
        return <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>;
    }
  };

  return (
    <ul className={`space-y-2 text-sm ${className}`}>
      {features.map((feature, index) => (
        <li key={index} className={`flex items-start ${itemClassName}`}>
          {showIcons && renderIcon(iconType)}
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;