
import { BellDot, Building, CircleDollarSign, Cog, Home, List, Package, PersonStanding, Radar, Shapes, UsersIcon } from "lucide-react";
import { ReactNode } from "react";
import { tdKey } from "../../types/table";

export interface SidebarLinks {
    label: string;
    icon?: ReactNode;
    href: string;
    childs?: SidebarLinks[]
}

const sizeIconsSidebar = 18

export const sidebarLinks: SidebarLinks[] = [
    {
        label: 'Inicio',
        icon: <Home size={sizeIconsSidebar} className="min-w-[18px]" />,
        href: '#hero'
    },
    {
        label: 'Herramientas',
        icon: <Cog size={sizeIconsSidebar} className="min-w-[18px]" />,
        href: "#howItWorks",
    },
    {
        label: 'Servicios',
        icon: <BellDot size={sizeIconsSidebar} className="min-w-[18px]" />,
        href: "#services",
    },
    {
        label: 'Precios',
        icon: <CircleDollarSign size={sizeIconsSidebar} className="min-w-[18px]" />,
        href: "#pricing",
    },
    {
        label: 'Sobre Nosotros',
        icon: <PersonStanding size={sizeIconsSidebar} className="min-w-[18px]" />,
        href: "#about",
    }
]

export const headerMapping: Record<tdKey, string> = {
    id: 'ID',
    name: 'Nombre',
    username: 'Usuario',
    last_name: 'Apellido',
    first_name: 'Primer Nombre',
    role: 'Rol',
    type: 'Tipo',
    email: 'Correo',
    phone: 'Teléfono',
    address: 'Dirección',
    price: 'Precio',
    stock: 'Stock',
    category: 'Categoría',
    sub_category: 'Sub Categoría',
    description: 'Descripción'
};

export interface statsProps {
    quantity: string;
    description: string;
}

export const stats: statsProps[] = [
    {
        quantity: "30+",
        description: "Proyectos",
    },
    {
        quantity: "12",
        description: "Empresas",
    },
    {
        quantity: "2k+",
        description: "Seguidores",
    },
    {
        quantity: "20",
        description: "Trabajadores",
    },
];

export interface FAQProps {
    question: string;
    answer: string;
    value: string;
}

export const FAQList: FAQProps[] = [
    {
        question: "Is this template free?",
        answer: "Yes. It is a free ChadcnUI template.",
        value: "item-1",
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
        value: "item-2",
    },
    {
        question:
            "Lorem ipsum dolor sit amet  Consectetur natus dolores minus quibusdam?",
        answer:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis necessitatibus maxime quis ipsa vitae cumque quo?",
        value: "item-3",
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        value: "item-4",
    },
    {
        question:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur natus?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
        value: "item-5",
    },
];

export interface CharacteristicsProps {
  title: string;
  description: string;
  image: string;
}

export const characteristics: CharacteristicsProps[] = [
  {
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: "https://shadcn-landing-page.vercel.app/assets/looking-ahead-DDDoMk_3.png",
  },
  {
    title: "Intuitive user interface",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: "https://shadcn-landing-page.vercel.app/assets/reflecting-tA1rdXzJ.png",
  },
  {
    title: "AI-Powered insights",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: "https://shadcn-landing-page.vercel.app/assets/growth-DZ7EdHJS.png",
  },
];

export const featureList: string[] = [
  "Dark/Light theme",
  "Reviews",
  "Features",
  "Pricing",
  "Contact form",
  "Our team",
  "Responsive design",
  "Newsletter",
  "Minimalist",
];

export interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}



export const features: FeatureProps[] = [
  {
    title: 'Órdenes',
    icon: <List size={48} className="min-w-[18px] text-white" />,
    description: "Administra las órdenes de tus clientes de manera eficiente, permitiendo un seguimiento claro desde el pedido hasta la entrega."
  },
  {
    title: 'Productos',
    icon: <Package size={48} className="min-w-[18px] text-white" />,
    description: "Gestiona tu inventario de productos, actualiza precios, descripciones y controla el stock fácilmente."
  },
  {
    title: 'Categorías',
    icon: <Shapes size={48} className="min-w-[18px] text-white" />,
    description: "Organiza tus productos en categorías personalizadas para facilitar la navegación y mejorar la experiencia de los clientes."
  },
  {
    title: 'Usuarios',
    icon: <UsersIcon size={48} className="min-w-[18px] text-white" />,
    description: "Gestiona los perfiles de tus usuarios, incluyendo permisos y roles para administrar tu local de manera segura."
  },
  {
    title: 'Mi Negocio',
    icon: <Building size={48} className="min-w-[18px] text-white" />,
    description: "Configura la información de tu local gastronómico, como el nombre, logotipo, horarios de atención y más."
  }
];

export interface PricingProps {
  title: string;
  price: number;
  releasePrice?: number | string;
  includedFeatures: string[];
  notIncludedFeatures: string[];
}

export const pricingList: PricingProps[] = [
  {
    title: "Emprendedor",
    price: 250,
    releasePrice: 430,
    includedFeatures: [
      "Creación, configuración y optimización de Redes Sociales",
      "Manejo de Redes (Facebook, Instagram)",
      "Meta Ads",
      "2-5 Publicaciones semanales feed (Flyers)",
      "3-5 Historias semanales (Flyers)",
      "Página Web Corporativa - Landing Page",
      "Email Corporativo",
      "Hosting - Mantenimiento",
      "Certificado SSL",
    ],
    notIncludedFeatures: [
      "WhatsApp Business",
      "Google Ads",
      "Posicionamiento Seo",
      "Ecommerce",
      "Análisis segmentado – Resultados de ventas",
      "4 reels/tiktoks mensuales",
      "Email Marketing",
      "Sistema Personalizado",
    ]
  },
  {
    title: "Start Up",
    price: 400,
    releasePrice: 600,
    includedFeatures: [
      "Creación, configuración y optimización de Redes Sociales",
      "Manejo de Redes (Facebook, Instagram, Twitter)",
      "Meta Ads",
      "4-6 Publicaciones semanales feed (Flyers estáticos o con animación sencilla, fotos y videos)",
      "5-7 Historias semanales (Flyers)",
      "Página Web Corporativa",
      "Email Corporativo",
      "Hosting - Mantenimiento",
      "Certificado SSL",
      "WhatsApp Business",
      "Google Ads",
      "Posicionamiento Seo",
      "Ecommerce",
    ],
    notIncludedFeatures: [
      "Análisis segmentado - Resultados de ventas",
      "4 reels/tiktoks mensuales",
      "Email Marketing",
      "Sistema Personalizado",
    ]
  },
  {
    title: "Empresarial",
    price: 450,
    releasePrice: "Lanzamiento a cotizar",
    includedFeatures: [
      "Creación, configuración y optimización de Redes Sociales",
      "Manejo de Redes (Facebook, Instagram, Tik Tok y LinkedIn)",
      "Meta Ads",
      "5-7 Publicaciones semanales feed (Flyers estáticos o con animación sencilla, fotos y videos)",
      "7-9 Historias semanales (Flyers)",
      "Página Web Corporativa",
      "Email Corporativo",
      "Hosting - Mantenimiento",
      "Certificado SSL",
      "WhatsApp Business",
      "Google Ads",
      "Posicionamiento Seo",
      "Ecommerce",
      "Análisis segmentado – Resultados de ventas",
      "4 reels/tiktoks mensuales",
      "Email Marketing",
      "Sistema Personalizado",
    ],
    notIncludedFeatures: []
  }
];

export interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

export const sponsors: SponsorProps[] = [
  {
    icon: <Radar size={34} />,
    name: "Sponsor 1",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 2",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 3",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 4",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 5",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 6",
  },
];


export interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

export interface SociaNetworkslProps {
  name: string;
  url: string;
}

export const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=35",
    name: "Emma Smith",
    position: "Product Manager",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "John Doe",
    position: "Tech Lead",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=36",
    name: "Ashley Ross",
    position: "Frontend Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Bruce Rogers",
    position: "Backend Developer",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
    ],
  },
];

export interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

export const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe",
    comment: "This landing page is awesome!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe1",
    comment:
      "Lorem ipsum dolor sit amet,empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe2",
    comment:
      "Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe3",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe4",
    comment:
      "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe5",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];