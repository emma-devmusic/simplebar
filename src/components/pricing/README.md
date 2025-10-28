# Componentes de Pricing Reutilizables

Este directorio contiene componentes reutilizables para crear secciones de precios modernas y flexibles.

## Componentes Disponibles

### `PricingSection`
Contenedor principal para mostrar múltiples planes de precios.

```tsx
import { PricingSection, PricingPlan } from '@/components/pricing';

const plans: PricingPlan[] = [
  {
    title: "Básico",
    description: "Para empezar",
    price: 19900,
    features: ["Feature 1", "Feature 2"],
    buttonText: "Elegir plan",
    buttonHref: "#contact"
  }
];

<PricingSection
  title="Nuestros Planes"
  subtitle="Elige el que mejor se adapte a ti"
  plans={plans}
/>
```

### `PricingCard`
Tarjeta individual para mostrar un plan de precios.

```tsx
import { PricingCard } from '@/components/pricing';

<PricingCard
  title="Pro"
  description="Para profesionales"
  price={29900}
  features={["Todo del básico", "Feature extra"]}
  buttonText="Elegir plan"
  buttonHref="#contact"
  isRecommended={true}
  buttonVariant="primary"
/>
```

### `PricingButton`
Botón estilizado para las acciones de pricing.

```tsx
import { PricingButton } from '@/components/pricing';

<PricingButton href="#contact" variant="primary">
  Elegir Plan
</PricingButton>
```

### `RecommendedBadge`
Badge para marcar planes recomendados.

```tsx
import { RecommendedBadge } from '@/components/pricing';

<RecommendedBadge text="Más Popular" />
```

### `PriceDisplay`
Componente para mostrar precios con formato.

```tsx
import { PriceDisplay } from '@/components/pricing';

<PriceDisplay
  price={29900}
  priceUnit="/mes"
  className="my-4"
/>
```

### `FeatureList`
Lista de características con iconos opcionales.

```tsx
import { FeatureList } from '@/components/pricing';

<FeatureList
  features={["Feature 1", "Feature 2", "Feature 3"]}
  showIcons={true}
  iconType="check"
/>
```

## Personalización

Todos los componentes aceptan `className` para personalización adicional y están construidos con Tailwind CSS.

### Soporte Dark/Light Mode

Los componentes tienen soporte completo para modo oscuro usando las clases `dark:` de Tailwind CSS:

- **Automático**: Los componentes detectan automáticamente el tema actual
- **Transiciones suaves**: Cambios de tema con animaciones fluidas
- **Contraste óptimo**: Colores ajustados para cada modo
- **Consistente**: Todos los elementos mantienen la coherencia visual

```tsx
// Los componentes se adaptan automáticamente al tema
<PricingSection plans={plans} />

// También puedes usar el hook de tema
import { useTheme } from '@/hooks/useTheme';

const { theme, toggleTheme } = useTheme();
```

## Ejemplos de Uso

### Pricing Simple
```tsx
const basicPlans = [
  {
    title: "Gratis",
    description: "Para probar",
    price: 0,
    features: ["10 usuarios", "1GB storage"],
    buttonText: "Comenzar gratis",
    buttonHref: "#signup"
  }
];
```

### Pricing Avanzado
```tsx
const advancedPlans = [
  {
    title: "Enterprise",
    description: "Para empresas grandes",
    price: "Personalizado",
    features: ["Usuarios ilimitados", "Soporte 24/7", "API completa"],
    buttonText: "Contactar ventas",
    buttonHref: "#contact",
    buttonVariant: "outline"
  }
];
```