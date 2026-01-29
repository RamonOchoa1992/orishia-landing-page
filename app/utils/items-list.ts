interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  popular: boolean;
  planType: string;
  contents: {
    name: string;
    isActive: boolean;
    description: string;
  }[];
}

export const itemsList: CarouselItem[] = [
  {
    id: 1,
    title: 'Basic',
    subtitle: 'For fast-growing businesses',
    price: 150,
    planType: '/por mes',
    popular: false,
    contents: [
      {
        name: 'IA básica Faqs',
        isActive: true,
        description: '(hasta 6000 caracteres y 2 flujos conversacionales).',
      },
      {
        name: 'Webchat',
        isActive: false,
        description: '',
      },
      {
        name: '1 Canal social',
        isActive: false,
        description: '(IG o FB)',
      },
      {
        name: '2 Licencias CX-Core',
        isActive: false,
        description: '(Agentes)',
      },
      {
        name: 'Reportería',
        isActive: false,
        description: '',
      },
      {
        name: '500 Interacciones',
        isActive: false,
        description: '',
      },
      {
        name: 'Capacitacion Inicial',
        isActive: false,
        description: '(1 hora en implementación)',
      },
    ],
  },
  {
    id: 2,
    title: 'Standard',
    subtitle: 'For freelancers and startups',
    price: 600,
    planType: '/por mes',
    popular: true,
    contents: [
      {
        name: 'Canales: WebChat + 3 Canales Meta',
        isActive: true,
        description: '',
      },
      {
        name: 'Tool Mail',
        isActive: false,
        description: '',
      },
      {
        name: 'Soporte Operativo',
        isActive: false,
        description: '',
      },
      {
        name: 'Licencias: 4',
        isActive: false,
        description: '',
      },
      {
        name: 'Extensión IA Inicial: 25000',
        isActive: false,
        description: '',
      },
      {
        name: 'Flujos conversacionales: 3',
        isActive: false,
        description: '',
      },
      {
        name: 'Automatizaciones: 5',
        isActive: false,
        description: '',
      },
      {
        name: 'Capacitación y Mantenimiento IA Inicial',
        isActive: false,
        description: '',
      },
    ],
  },
  {
    id: 3,
    title: 'Advanced',
    subtitle: 'For fast-growing businesses',
    price: 1000,
    planType: '/por mes',
    popular: false,
    contents: [
      {
        name: 'Canales: WebChat + 3 Canales Meta',
        isActive: false,
        description: '',
      },
      {
        name: 'Tool Mail + Catálogo y Novedades',
        isActive: false,
        description: '',
      },
      {
        name: 'Integración Tienda Nube para Postventa',
        isActive: false,
        description: '',
      },
      {
        name: 'Conversaciones IA Intermedia: 2000',
        isActive: false,
        description: '',
      },
      {
        name: 'Licencias: 8',
        isActive: false,
        description: '',
      },
      {
        name: 'Extensión IA Intermedia: 50000',
        isActive: false,
        description: '',
      },
      {
        name: 'Flujos Conversacionales: 6',
        isActive: false,
        description: '',
      },
    ],
  },
  {
    id: 4,
    title: 'Premium',
    subtitle: 'For fast-growing businesses',
    price: 1500,
    planType: '/por mes',
    popular: false,
    contents: [
      {
        name: 'Canales: WebChat + 3 Canales Meta',
        isActive: false,
        description: '',
      },
      {
        name: 'Tool Mail + Catálogo y Novedades',
        isActive: false,
        description: '',
      },
      {
        name: 'Integración Tienda Nube para Postventa',
        isActive: false,
        description: '',
      },
      {
        name: 'Conversaciones IA Avanzada: 3000',
        isActive: false,
        description: '',
      },
      {
        name: 'Licencias: 15',
        isActive: false,
        description: '',
      },
      {
        name: 'Extensión IA Avanzada: 80000',
        isActive: false,
        description: '',
      },
      {
        name: 'Flujos Conversacionales: 10',
        isActive: false,
        description: '',
      },
    ],
  },
  {
    id: 5,
    title: 'Corporate',
    subtitle: 'For fast-growing businesses',
    price: 1800,
    planType: '/por mes',
    popular: false,
    contents: [
      {
        name: 'Canales: WebChat + 3 Canales Meta + Canal API',
        isActive: false,
        description: '',
      },
      {
        name: 'Tool Mail + Catálogo y Novedades',
        isActive: false,
        description: '',
      },
      {
        name: 'Integración Tienda Nube Postventa y Catálogo',
        isActive: false,
        description: '',
      },
      {
        name: 'Conversaciones IA a Medida: 4000',
        isActive: false,
        description: '',
      },
      {
        name: 'Licencias: 20',
        isActive: false,
        description: '',
      },
      {
        name: 'Extensión IA a Medida: 100 000',
        isActive: false,
        description: '',
      },
      {
        name: 'Flujos Conversacionales: 15',
        isActive: false,
        description: '',
      },
    ],
  },
];
