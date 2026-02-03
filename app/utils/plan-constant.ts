export const constant = {
  es: {
    title: 'Planes y Precios',
    subtitle:
      'Elige el plan que mejor se adapte a tus necesidades. Todos los planes incluyen funciones esenciales para empezar, con opciones para escalar a medida que creces.',
    subtitleBold:
      'Sin cargos ocultos y con la flexibilidad de cambiar de plan en cualquier momento.',
    monthly: 'Mensual',
    annual: 'Anual',
    selectPlanText: 'Selecciona tu plan de preferencia',
    popularPlanText: 'Plan más popular',
    seeMoreText: 'Ver más...',
    selectPlanButton: 'Seleccionar plan',
    items: [
      {
        id: 1,
        title: 'Básico',
        subtitle: 'Para empresas de rápido crecimiento',
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
        title: 'Estándar',
        subtitle: 'Para freelancers y startups',
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
            name: 'Herramienta de Correo',
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
            name: 'Flujos Conversacionales: 3',
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
        title: 'Avanzado',
        subtitle: 'Para empresas de rápido crecimiento',
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
            name: 'Herramienta de Correo + Catalogo y Novedades',
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
        subtitle: 'Para empresas de rápido crecimiento',
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
            name: 'Herramienta de Correo + Catalogo y Novedades',
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
        title: 'Corporativo',
        subtitle: 'Para empresas de rápido crecimiento',
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
            name: 'Herramienta de Correo + Catalogo y Novedades',
            isActive: false,
            description: '',
          },
          {
            name: 'Integración Tienda Nube para Postventa',
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
    ],
  },
  en: {
    title: 'Plans & Pricing',
    subtitle:
      'Choose the plan that best fits your needs. All plans include essential features to get you started, with options to scale as you grow.',
    subtitleBold:
      'No hidden fees and the flexibility to change plans at any time.',
    monthly: 'Monthly',
    annual: 'Annual',
    selectPlanText: 'Select your preferred plan',
    popularPlanText: 'Most popular plan',
    seeMoreText: 'See more...',
    selectPlanButton: 'Select plan',
    items: [
      {
        id: 1,
        title: 'Basic',
        subtitle: 'For fast-growing businesses',
        price: 150,
        planType: '/per month',
        popular: false,
        contents: [
          {
            name: 'Basic IA Faqs',
            isActive: true,
            description: '(to 6000 characters y 2 conversational flows).',
          },
          {
            name: 'Webchat',
            isActive: false,
            description: '',
          },
          {
            name: '1 Social Channel',
            isActive: false,
            description: '(IG or FB)',
          },
          {
            name: '2 CX-Core Licenses',
            isActive: false,
            description: '(Agents)',
          },
          {
            name: 'Reporting',
            isActive: false,
            description: '',
          },
          {
            name: '500 Interactions',
            isActive: false,
            description: '',
          },
          {
            name: 'Initial Training',
            isActive: false,
            description: '(1 hour of implementation)',
          },
        ],
      },
      {
        id: 2,
        title: 'Standard',
        subtitle: 'For freelancers and startups',
        price: 600,
        planType: '/per month',
        popular: true,
        contents: [
          {
            name: 'Channels: WebChat + 3 Meta Channels',
            isActive: true,
            description: '',
          },
          {
            name: 'Mail Tool',
            isActive: false,
            description: '',
          },
          {
            name: 'Operational Support',
            isActive: false,
            description: '',
          },
          {
            name: 'Licenses: 4',
            isActive: false,
            description: '',
          },
          {
            name: 'Initial AI Extension: 25000',
            isActive: false,
            description: '',
          },
          {
            name: 'Conversational Flows: 3',
            isActive: false,
            description: '',
          },
          {
            name: 'Automations: 5',
            isActive: false,
            description: '',
          },
          {
            name: 'Initial AI Training & Maintenance',
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
        planType: '/per month',
        popular: false,
        contents: [
          {
            name: 'Channels: WebChat + 3 Meta Channels',
            isActive: false,
            description: '',
          },
          {
            name: 'Mail Tool + Catalog & News',
            isActive: false,
            description: '',
          },
          {
            name: 'Nube Store Integration for After-Sales',
            isActive: false,
            description: '',
          },
          {
            name: 'Intermediate AI Conversations: 2000',
            isActive: false,
            description: '',
          },
          {
            name: 'Licenses: 8',
            isActive: false,
            description: '',
          },
          {
            name: 'Intermediate AI Extension: 50000',
            isActive: false,
            description: '',
          },
          {
            name: 'Conversational Flows: 6',
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
        planType: '/per month',
        popular: false,
        contents: [
          {
            name: 'Channels: WebChat + 3 Meta Channels',
            isActive: false,
            description: '',
          },
          {
            name: 'Mail Tool + Catalog & News',
            isActive: false,
            description: '',
          },
          {
            name: 'Nube Store Integration for After-Sales',
            isActive: false,
            description: '',
          },
          {
            name: 'Advanced AI Conversations: 3000',
            isActive: false,
            description: '',
          },
          {
            name: 'Licenses: 15',
            isActive: false,
            description: '',
          },
          {
            name: 'Advanced AI Extension: 80000',
            isActive: false,
            description: '',
          },
          {
            name: 'Conversational Flows: 10',
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
        planType: '/per month',
        popular: false,
        contents: [
          {
            name: 'Channels: WebChat + 3 Meta Channels + API Channel',
            isActive: false,
            description: '',
          },
          {
            name: 'Mail Tool + Catalog & News',
            isActive: false,
            description: '',
          },
          {
            name: 'Nube Store Integration for After-Sales',
            isActive: false,
            description: '',
          },
          {
            name: 'Custom AI Conversations: 4000',
            isActive: false,
            description: '',
          },
          {
            name: 'Licenses: 20',
            isActive: false,
            description: '',
          },
          {
            name: 'Extensión IA a Medida: 100 000',
            isActive: false,
            description: '',
          },
          {
            name: 'Conversational Flows: 15',
            isActive: false,
            description: '',
          },
        ],
      },
    ],
  },
};
