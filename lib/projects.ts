export interface Project {
  id: number;
  title: string;
  subtitle?: string; // e.g. "SaaS Dashboard"
  tags: string[];
  image: string;
  
  // Detailed content for the modal
  description?: string;
  date?: string;
  role?: string;
  company?: string;
  
  problem?: {
    title: string;
    points: { title: string; description: string }[];
  };
  
  solution?: {
    title: string;
    points: { title: string; description: string }[];
  };
  
  marketAnalysis?: {
    title: string;
    points: { title: string; description: string }[];
  };
  
  result?: {
    title: string;
    points: { title: string; description: string }[];
  };
  
  gallery?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Reda CRM", // This maps to "Yardbook - Dashboard SaaS" or similar in the original list, but I'll make it explicit as requested
    subtitle: "Custom CRM Platform",
    tags: ["Dashboard SaaS", "App Development"],
    image: "/assets/reda-crm.png",
    
    description: "This case study outlines the development of a custom CRM platform for Reda, a real estate tech company focused on lead and appointment management. The project involved building cross-platform mobile and web applications using Flutter, integrating Firebase for real-time data, and automating workflows through n8n. The result was a fully tailored tool that streamlined internal operations and improved agent-client interaction.",
    
    date: "January, 2021",
    role: "Flutter Developer & Frontend Engineer",
    company: "Reda",
    
    problem: {
      title: "Problem",
      points: [
        { title: "Disconnected Tools:", description: "Internal teams relied on scattered tools and manual processes to manage leads, appointments, and client profiles." },
        { title: "Lack of Real-Time Data:", description: "There was no centralized platform to sync client interactions or provide live updates to agents in the field." },
        { title: "Inefficient Workflow:", description: "The absence of automation led to delays in lead follow-up, appointment scheduling, and notification handling." },
        { title: "Scaling with Consistency:", description: "As the company grew, maintaining consistent agent-client communication and operational flow became increasingly difficult." }
      ]
    },
    
    solution: {
      title: "Solution",
      points: [
        { title: "Cross-Platform App Development", description: "Developed a mobile and web CRM app using Flutter to centralize lead tracking, appointment scheduling, and agent-client interactions." },
        { title: "Real-Time Data Integration", description: "Implemented Firebase for live updates, real-time data sync, and seamless user authentication across platforms." },
        { title: "Workflow Automation", description: "Connected backend logic with n8n to automate lead assignments, follow-ups, and in-app notifications—reducing manual tasks and delays." },
        { title: "Scalable Frontend Architecture", description: "Designed a modular UI that adapts to different user roles (agents, admins, profile managers), with a focus on clarity, responsiveness, and speed." }
      ]
    },
    
    marketAnalysis: {
      title: "Market Analysis",
      points: [
        { title: "Target Users:", description: "Real estate agents and profiling teams in need of a centralized tool to manage leads, schedule appointments, and streamline follow-ups efficiently." },
        { title: "Competitive Landscape:", description: "Most CRMs in the real estate space were either overly complex or too generic, lacking the customization and agility Reda needed for its internal operations." },
        { title: "Technology Trends:", description: "Increasing adoption of real-time databases, mobile-first solutions, and automation platforms like n8n highlighted the opportunity to build a lightweight, scalable system tailored to Reda’s workflow." }
      ]
    },
    
    result: {
      title: "Result",
      points: [
        { title: "Operational Efficiency", description: "Automated lead distribution and follow-up processes reduced manual workload, saving time and minimizing human error." },
        { title: "Improved Agent Performance", description: "Real-time updates and centralized data allowed agents to respond faster and manage appointments more effectively." },
        { title: "Stronger Internal Communication", description: "The unified platform streamlined coordination between profiling teams and field agents, improving consistency and accountability." },
        { title: "Scalable Infrastructure", description: "The modular architecture and automation tools enabled Reda to scale its operations without sacrificing control or speed." }
      ]
    },
    
    gallery: [
      "/assets/reda-crm.png",
      "/assets/ai-card.png",
      "/assets/gebesa-card.png"
    ]
  },
  {
    id: 2,
    title: "[Hero] Agencia con IA",
    subtitle: "Landing Page",
    tags: ["Sección Hero"],
    image: "/assets/ai-card.png",
    description: "Una solución innovadora para agencias digitales que buscan integrar inteligencia artificial en sus flujos de trabajo. Este proyecto se centró en crear una experiencia de usuario inmersiva desde el primer impacto.",
    date: "March, 2023",
    role: "Frontend Developer",
    company: "AI Agency",
    problem: {
      title: "El Problema",
      points: [
        { title: "Baja Conversión:", description: "Las landing pages tradicionales no lograban comunicar el valor de la IA de manera efectiva." },
        { title: "Diseño Desactualizado:", description: "La imagen visual no reflejaba la modernidad de la tecnología ofrecida." }
      ]
    },
    solution: {
      title: "La Solución",
      points: [
        { title: "Diseño Moderno", description: "Uso de efectos visuales avanzados y glassmorphism." },
        { title: "Copywriting Persuasivo", description: "Textos orientados a la acción y beneficios claros." }
      ]
    }
  },
  {
    id: 3,
    title: "Portafolio Sitio Web Personal",
    subtitle: "Marca Personal",
    tags: ["Landing Page", "Responsivo"],
    image: "/assets/reda-crm.png", // Using duplicate image as placeholder if needed, or unique one if available
    description: "Este mismo portafolio. Diseñado para mostrar habilidades técnicas y de diseño, con un enfoque en la experiencia del usuario y la performance.",
    date: "January, 2026",
    role: "Full Stack Developer",
    company: "Personal",
     problem: {
      title: "El Desafío",
      points: [
        { title: "Diferenciación:", description: "Destacar en un mercado competitivo de desarrolladores." },
        { title: "Performance:", description: "Lograr animaciones fluidas sin sacrificar la velocidad de carga." }
      ]
    },
    solution: {
      title: "La Estrategia",
      points: [
        { title: "Next.js & Tailwind", description: "Stack moderno para máxima velocidad y flexibilidad." },
        { title: "Framer Motion", description: "Animaciones que guían la atención del usuario sin abrumar." }
      ]
    }
  },
  {
    id: 4,
    title: "Sitio Web SaaS",
    subtitle: "Plataforma de Servicios",
    tags: ["Hero Section"],
    image: "/assets/gebesa-card.png",
     description: "Diseño y desarrollo de la sección Hero para una plataforma SaaS, optimizada para conversión y claridad en la propuesta de valor.",
    date: "June, 2022",
    role: "UI Engineer",
    company: "SaaS Corp"
  },
  {
    id: 5,
    title: "Sitio Web de Viajes",
    subtitle: "Plataforma de Reservas",
    tags: ["Landing Page", "Responsivo"],
    image: "/assets/n8n.png",
    description: "Plataforma de viajes enfocada en experiencias locales y auténticas. Integración con APIs de mapas y reservas en tiempo real.",
    date: "August, 2024",
    role: "Lead Developer",
    company: "Travel Tech"
  },
  {
    id: 6,
    title: "Sitio Web Responsivo Yardbook",
    subtitle: "Adaptación Móvil",
    tags: ["Sitio Web", "Dashboard"],
    image: "/assets/simpatia.png",
     description: "Adaptación completa de una plataforma de gestión de jardinería para dispositivos móviles, manteniendo la funcionalidad compleja del dashboard de escritorio.",
    date: "November, 2023",
    role: "Frontend Developer",
    company: "Yardbook"
  }
];
