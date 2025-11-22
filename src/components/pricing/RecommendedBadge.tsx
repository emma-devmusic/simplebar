interface RecommendedBadgeProps {
  text?: string;
  className?: string;
}

export const RecommendedBadge = ({ 
  text = "Recomendado", 
  className = "" 
}: RecommendedBadgeProps) => {
  return (
    <div className={`self-start text-xs font-semibold bg-primary text-neutral-900 rounded px-2 py-0.5 shadow-sm ${className}`}>
      {text}
    </div>
  );
};

export default RecommendedBadge;