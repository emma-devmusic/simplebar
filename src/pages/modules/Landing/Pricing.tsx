import { PricingSection, PricingPlan } from '../../../components/pricing';

const pricingPlans: PricingPlan[] = [
  {
    title: "Básico",
    description: "Ideal para cafeterías y food trucks.",
    price: 14900,
    features: [
      "POS + Menú QR",
      "1 sucursal",
      "Soporte por chat"
    ],
    buttonText: "Elegir plan",
    buttonHref: "#cta",
    buttonVariant: "outline"
  },
  {
    title: "Plan Único",
    description: "Para restaurantes con salón y delivery.",
    price: 17000,
    features: [
      "Todo del Básico",
      "Reservas & Gestión de sala",
      "Reportes en tiempo real",
      "Integración con delivery"
    ],
    buttonText: "Elegir plan",
    buttonHref: "#cta",
    isRecommended: true,
    buttonVariant: "primary"
  },
  {
    title: "Multi-sucursal",
    description: "Para cadenas y franquicias.",
    price: "A medida",
    features: [
      "Usuarios y roles avanzados",
      "Reportes consolidados",
      "SLAs y soporte dedicado"
    ],
    buttonText: "Solicitar cotización",
    buttonHref: "#demo",
    buttonVariant: "outline"
  }
];

export const Pricing = () => {
  return (
    <PricingSection
      title="Planes y precios"
      subtitle="Elegí el plan que mejor se adapte a tu operación. Sin costos ocultos."
      plans={pricingPlans}
    />
  );
};
