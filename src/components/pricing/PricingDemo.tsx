import { PricingSection, PricingPlan } from './';
import { useTheme } from '../../hooks/useTheme';

// Componente de demostración con toggle de tema
export const PricingDemo = () => {
  const { theme, toggleTheme } = useTheme();

  const demoPlans: PricingPlan[] = [
    {
      title: "Starter",
      description: "Perfecto para comenzar tu negocio",
      price: 9900,
      priceUnit: "/mes",
      features: [
        "Hasta 100 productos",
        "1 usuario",
        "Soporte por email",
        "Reportes básicos"
      ],
      buttonText: "Comenzar",
      buttonHref: "#contact",
      buttonVariant: "outline"
    },
    {
      title: "Professional",
      description: "Ideal para negocios en crecimiento",
      price: 19900,
      priceUnit: "/mes",
      features: [
        "Productos ilimitados",
        "Hasta 5 usuarios",
        "Soporte prioritario",
        "Reportes avanzados",
        "Integraciones",
        "API completa"
      ],
      buttonText: "Elegir Professional",
      buttonHref: "#contact",
      isRecommended: true,
      buttonVariant: "primary"
    },
    {
      title: "Enterprise",
      description: "Para empresas grandes con necesidades específicas",
      price: "Personalizado",
      features: [
        "Todo lo del Professional",
        "Usuarios ilimitados",
        "Soporte 24/7",
        "Onboarding personalizado",
        "SLA garantizado",
        "Manager dedicado"
      ],
      buttonText: "Contactar ventas",
      buttonHref: "#contact",
      buttonVariant: "outline"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Toggle de tema */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 shadow-lg hover:shadow-xl transition-all duration-200"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>

      {/* Sección de pricing */}
      <PricingSection
        title="Planes y precios"
        subtitle="Encuentra el plan perfecto para tu negocio. Cambia o cancela en cualquier momento."
        plans={demoPlans}
        className="pt-20"
      />
    </div>
  );
};