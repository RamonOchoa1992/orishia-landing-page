interface CarouselItem {
  id: number;
  title: string[];
  subtitle: string[];
  price: number;
  popular: boolean;
  planType: string[];
  contents: {
    name: string[];
    isActive: boolean;
    description: string[];
  }[];
}

export const itemsList: CarouselItem[] = [
  {
    id: 1,
    title: ['Básico', 'Basic'],
    subtitle: [
      'Para empresas de rápido crecimiento',
      'For fast-growing businesses',
    ],
    price: 150,
    planType: ['/por mes', '/per month'],
    popular: false,
    contents: [
      {
        name: ['IA básica Faqs', 'Basic IA Faqs'],
        isActive: true,
        description: [
          '(hasta 6000 caracteres y 2 flujos conversacionales).',
          '(to 6000 characters y 2 conversational flows).',
        ],
      },
      {
        name: ['Webchat', 'Webchat'],
        isActive: false,
        description: ['', ''],
      },
      {
        name: ['1 Canal social', '1 Social Channel'],
        isActive: false,
        description: ['(IG o FB)', '(IG or FB)'],
      },
      {
        name: ['2 Licencias CX-Core', '2 CX-Core Licenses'],
        isActive: false,
        description: ['(Agentes)', '(Agents)'],
      },
      {
        name: ['Reportería', 'Reporting'],
        isActive: false,
        description: ['', ''],
      },
      {
        name: ['500 Interacciones', '500 Interactions'],
        isActive: false,
        description: ['', ''],
      },
      {
        name: ['Capacitacion Inicial', 'Initial Training'],
        isActive: false,
        description: [
          '(1 hora en implementación)',
          '(1 hour of implementation)',
        ],
      },
    ],
  },
  {
    id: 2,
    title: ['Estándar', 'Standard'],
    subtitle: ['Para freelancers y startups', 'For freelancers and startups'],
    price: 600,
    planType: ['/por mes', '/per month'],
    popular: true,
    contents: [
      {
        name: [
          'Canales: WebChat + 3 Canales Meta',
          'Channels: WebChat + 3 Meta Channels',
        ],
        isActive: true,
        description: ['', ''],
      },
      {
        name: ['Herramienta de Correo', 'Mail Tool'],
        isActive: false,
        description: ['', ''],
      },
      {
        name: ['Soporte Operativo', 'Operational Support'],
        isActive: false,
        description: ['', ''],
      },
      {
        name: ['Licencias: 4', 'Licenses: 4'],
        isActive: false,
        description: ['', ''],
      },
      {
        name: ['Extensión IA Inicial: 25000', 'Initial AI Extension: 25000'],
        isActive: false,
        description: ['', ''],
      },
      {
        name: ['Flujos Conversacionales: 3', 'Conversational Flows: 3'],
        isActive: false,
        description: ['', ''],
      },
      {
        name: ['Automatizaciones: 5', 'Automations: 5'],
        isActive: false,
        description: ['', ''],
      },
      {
        name: [
          'Capacitación y Mantenimiento IA Inicial',
          'Initial AI Training & Maintenance',
        ],
        isActive: false,
        description: ['', ''],
      },
    ],
  },
  {
    id: 3,
    title: ['Avanzado', 'Advanced'],
    subtitle: [
      'Para empresas de rápido crecimiento',
      'For fast-growing businesses',
    ],
    price: 1000,
    planType: ['/por mes', '/per month'],
    popular: false,
    contents: [
      {
        name: [
          'Canales: WebChat + 3 Canales Meta',
          'Channels: WebChat + 3 Meta Channels',
        ],
        isActive: false,
        description: ['', ''],
      },
      {
        name: [
          'Herramienta de Correo + Catalogo y Novedades',
          'Mail Tool + Catalog & News',
        ],
        isActive: false,
        description: ['', ''],
      },
      {
        name: [
          'Integración Tienda Nube para Postventa',
          'Nube Store Integration for After-Sales',
        ],
        isActive: false,
        description: ['', ''],
      },
      {
        name: [
          'Conversaciones IA Intermedia: 2000',
          'Intermediate AI Conversations: 2000',
        ],
        isActive: false,
        description: ['', ''],
      },
      {
        name: ['Licencias: 8', 'Licenses: 8'],
        isActive: false,
        description: ['', ''],
      },
      {
        name: [
          'Extensión IA Intermedia: 50000',
          'Intermediate AI Extension: 50000',
        ],
        isActive: false,
        description: ['', ''],
      },
      {
        name: ['Flujos Conversacionales: 6', 'Conversational Flows: 6'],
        isActive: false,
        description: ['', ''],
      },
    ],
  },
  {
    id: 4,
    title: ['Premium', 'Premium'],
    subtitle: [
      'Para empresas de rápido crecimiento',
      'For fast-growing businesses',
    ],
    price: 1500,
    planType: ['/por mes', '/per month'],
    popular: false,
    contents: [
      {
        name: [
          'Canales: WebChat + 3 Canales Meta',
          'Channels: WebChat + 3 Meta Channels',
        ],
        isActive: false,
        description: ['', ''],
      },
      {
        name: [
          'Herramienta de Correo + Catalogo y Novedades',
          'Mail Tool + Catalog & News',
        ],
        isActive: false,
        description: ['', ''],
      },
      {
        name: [
          'Integración Tienda Nube para Postventa',
          'Nube Store Integration for After-Sales',
        ],
        isActive: false,
        description: ['', ''],
      },
      {
        name: [
          'Conversaciones IA Avanzada: 3000',
          'Advanced AI Conversations: 3000',
        ],
        isActive: false,
        description: ['', ''],
      },
      {
        name: ['Licencias: 15', 'Licenses: 15'],
        isActive: false,
        description: ['', ''],
      },
      {
        name: ['Extensión IA Avanzada: 80000', 'Advanced AI Extension: 80000'],
        isActive: false,
        description: ['', ''],
      },
      {
        name: ['Flujos Conversacionales: 10', 'Conversational Flows: 10'],
        isActive: false,
        description: ['', ''],
      },
    ],
  },
  {
    id: 5,
    title: ['Corporativo', 'Corporate'],
    subtitle: [
      'Para empresas de rápido crecimiento',
      'For fast-growing businesses',
    ],
    price: 1800,
    planType: ['/por mes', '/per month'],
    popular: false,
    contents: [
      {
        name: [
          'Canales: WebChat + 3 Canales Meta + Canal API',
          'Channels: WebChat + 3 Meta Channels + API Channel',
        ],
        isActive: false,
        description: ['', ''],
      },
      {
        name: [
          'Herramienta de Correo + Catalogo y Novedades',
          'Mail Tool + Catalog & News',
        ],
        isActive: false,
        description: ['', ''],
      },
      {
        name: [
          'Integración Tienda Nube para Postventa',
          'Nube Store Integration for After-Sales',
        ],
        isActive: false,
        description: ['', ''],
      },
      {
        name: [
          'Conversaciones IA a Medida: 4000',
          'Custom AI Conversations: 4000',
        ],
        isActive: false,
        description: ['', ''],
      },
      {
        name: ['Licencias: 20', 'Licenses: 20'],
        isActive: false,
        description: ['', ''],
      },
      {
        name: [
          'Extensión IA a Medida: 100 000',
          'Custom AI Extension: 100 000',
        ],
        isActive: false,
        description: ['', ''],
      },
      {
        name: ['Flujos Conversacionales: 15', 'Conversational Flows: 15'],
        isActive: false,
        description: ['', ''],
      },
    ],
  },
];
